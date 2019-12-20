# autologout-labextension

Redirects to /hub/logout when no user interaction for a certain duration.

## Prerequisites

* JupyterHub
* JupyterLab

## Installation

To install using pip, do the following in the repository directory:

```bash
jupyter labextension install .
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```
