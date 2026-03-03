#!/usr/bin/env python3
"""
Simple HTTP Server for Quantum Exploration Web Application
Run this script to start a local server and access the application
"""

import http.server
import socketserver
import os
import webbrowser
import sys
from pathlib import Path

PORT = 8000
HANDLER = http.server.SimpleHTTPRequestHandler

def find_available_port(start_port=8000, max_attempts=10):
    """Find an available port starting from start_port"""
    for port in range(start_port, start_port + max_attempts):
        try:
            with socketserver.TCPServer(("", port), HANDLER) as test_server:
                test_server.server_close()
                return port
        except OSError:
            continue
    return None

def main():
    try:
        # Change to the directory where this script is located
        script_dir = Path(__file__).parent.absolute()
        os.chdir(script_dir)
        
        # Find available port
        port = find_available_port(PORT)
        if port is None:
            print(f"Error: Could not find an available port between {PORT} and {PORT + 9}")
            sys.exit(1)
        
        # Create socket server with reuse address option
        socketserver.TCPServer.allow_reuse_address = True
        
        with socketserver.TCPServer(("", port), HANDLER) as httpd:
            url = f"http://localhost:{port}"
            print(f"\n{'='*60}")
            print(f"🚀 Quantum Exploration Web Application")
            print(f"{'='*60}")
            print(f"Server running at: {url}")
            print(f"Press Ctrl+C to stop the server")
            print(f"{'='*60}\n")
            
            # Open browser automatically
            try:
                webbrowser.open(url)
                print("Opening browser...")
            except Exception as e:
                print(f"Please open {url} in your browser")
            
            # Serve files
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print("\n\nServer stopped.")
    except Exception as e:
        print(f"Error starting server: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
