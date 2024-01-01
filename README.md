## Hello World using GTK 4.0 and GJS

# org.example.filebrowser

## Description

`org.example.filebrowser` is a file browser application built with GJS and packaged as a Flatpak. It allows users to navigate their file system in a graphical interface.

## Features

- Prints Hello World !

## Installation

To install `org.example.filebrowser`, you need to have Flatpak installed. Once Flatpak is installed, you can build and install the application with the following commands:

```bash
flatpak-builder --force-clean --user --install build-dir org.example.filebrowser.yml

# Then you can run the application with:

flatpak run org.example.filebrowser
