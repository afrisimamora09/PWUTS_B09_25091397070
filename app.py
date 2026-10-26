
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import webbrowser
import threading

# Folder tempat app.py berada
PROJECT_DIR = Path(__file__).resolve().parent
HOST = "127.0.0.1"
PORT = 8000


class SmartFinderHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PROJECT_DIR), **kwargs)


def main():
    try:
        server = ThreadingHTTPServer((HOST, PORT), SmartFinderHandler)
    except OSError:
        print(f"Port {PORT} sedang digunakan.")
        print("Tutup server lain atau ubah nilai PORT di app.py.")
        return

    url = f"http://localhost:{PORT}"

    print("=" * 40)
    print("       SMARTFINDER WEB SERVER")
    print("=" * 40)
    print(f"Website: {url}")
    print("Browser akan dibuka otomatis.")
    print("Jangan tutup jendela ini selama website digunakan.")
    print("Tekan Ctrl+C untuk menghentikan server.")
    print("=" * 40)

    threading.Timer(1, lambda: webbrowser.open(url)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer SmartFinder dihentikan.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
