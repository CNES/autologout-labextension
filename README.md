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

## Configuration

A configuration file is available to set the timer and the ignored url:

```json
{
  "logout_time": 1800,
  "ignored_url": "ignored.url.com"
}
```

"logout_time" is the timer to logout automatically in seconds.

"ignored_url" is the url which deactivate the timer.

After changes, jupyterlabs need to be rebuilt with this command (in the environment):

```bash
jupyter lab build --dev-build=False
```

and finally refresh jupyter on the web browser to take the new values into account.

*Copyright 2020 CS GROUP - France
All rights reserved*
