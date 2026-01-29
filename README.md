# Trinket

**Trinket** — a lightweight Python-based HTTP/HTTPS server designed for modern web development. It supports local HTTPS via mkcert, automatic port fallback, LAN access, and optional browser launching — perfect for developers who want a simple, reliable, and secure local server.

## Features

- Serve a directory over **HTTP** or **HTTPS**.
- Auto-generate trusted certificates for local development using `mkcert`.
- Accessible by other devices on your local network with automatic IP detection.
- Automatically falls back to the next available port if the requested one is in use.
- Optional **automatic browser launch**.
- Minimal dependencies: Bash, Python 3, optionally mkcert for HTTPS.

---

## Installation

### Dependencies

Make sure Bash and Python 3 are installed:

```sh
bash --version
python3 --version
```

#### Optional

For HTTPS support, you need to install [mkcert](https://github.com/FiloSottile/mkcert):

```sh
sudo apt install mkcert       # Ubuntu/Debian/Pop!_OS
mkcert -install               # install local CA
```

### Downloading a Release

Simply head over to [Releases](https://github.com/CodeZea1ot/trinket/releases), download the `trinket.sh` asset for your desired version, and then put it in your `$PATH`. I recommend `/usr/local/bin`.

```bash
sudo cp /path/to/trinket.sh /usr/local/bin/trinket
```

### Cloning the Repo

You can also install `trinket` by cloning this repo and then creating a symbolic link that is available within your `$PATH`.

This installation method allows you to simply `git pull` this repo whenever you want the latest version from the `main` branch.

It also allows you to swap the version of `trinket` you are using by changing git branches, which is useful for exploring features currently in development but not yet in a release.

```bash
git clone git@github.com:CodeZea1ot/trinket.git
cd trinket
sudo ln -s $(pwd)/trinket.sh /usr/local/bin/trinket
```

---

## Uninstallation

To uninstall, simply `rm` the symbolic link or copied binary you created during installation. If you put it in `/usr/local/bin` you could just do the following.

```bash
sudo rm /usr/local/bin/trinket
```

---

## Usage

```sh
Usage: trinket [options] [directory] [port]

Start a simple HTTP/HTTPS server using Python.

Options:
  -s, --https       Use HTTPS with mkcert (localhost only by default)
  -b, --browser     Automatically open browser
  -H, --host        Host to bind to (default: localhost)
  -h, --help        Show this help message

Arguments:
  directory         Directory to serve (default: current directory)
  port              Port number (default: 8000 HTTP, 8443 HTTPS)

Examples:
  trinket
  trinket public
  trinket public 3000
  trinket -s
  trinket --https
  trinket -s public 8443
  trinket public -b
  trinket -H 0.0.0.0 -s
```

### Options

| Option            | Description                                  |
| ----------------- | -------------------------------------------- |
| `-s`, `--https`   | Serve with HTTPS (localhost only by default) |
| `-b`, `--browser` | Automatically open browser                   |
| `-H`, `--host`    | Host to bind to (default: localhost)         |
| `-h`, `--help`    | Show help message                            |

### Arguments

| Argument    | Description                                     |
| ----------- | ----------------------------------------------- |
| `directory` | Directory to serve (default: current directory) |
| `port`      | Port number (default: 8000 HTTP, 8443 HTTPS)    |

---

## Notes

- When using HTTPS, mkcert will generate a certificate including the host IP. Browsers must trust mkcert’s local CA:
  - **Chrome/Chromium:** works automatically after `mkcert -install`. If not, close all instances and reopen.
  - **Firefox:** may require manual import of `rootCA.pem`.
- The script automatically increments the port if the requested one is in use.
- The server runs on Python’s built-in `http.server` and is suitable for development purposes only — **not for production use**.
- Other devices on your local network can access the server if you use `-H 0.0.0.0`.
  - When using `-H 0.0.0.0`, Trinket will attempt to generate a certificate including your LAN IP. Browsers must trust mkcert’s local CA for this IP as well.
- Automatic browser launch currently supports Linux (`xdg-open`).

## License

**Trinket** is released under the [MIT License](LICENSE).

**Dependencies:**

- [`mkcert`](https://github.com/FiloSottile/mkcert) is included optionally for HTTPS and is licensed under the BSD 3-Clause License.

Use Trinket responsibly — it is intended for local development and testing purposes only, not for production deployments.
