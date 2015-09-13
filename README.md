# General Cluster

***General Cluster*** is a utility for running an Express application on a [Node _Cluster_](https://nodejs.org/api/cluster.html).

- 550 Bytes _unzipped_
- _Express_ is the only dependency
- Available as an npm package

To learn about using Clusters with Node, please explore the [appendix](#appendix).

[ ![Current Stable Release Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Cfeusier/general-cluster/releases)
[ ![Current Stable npm Release](https://img.shields.io/badge/npm-install%20general--cluster-lightgrey.svg)](https://www.npmjs.com/package/general-cluster)

---

> **Created by [Clark Feusier](http://clarkfeusier.com/pages/about)**

---

1. [Installation](#installation)
1. [Basic Usage Example](#basic-usage-example)
1. [Contributing](#contributing-to-iswear)
1. [Development Requirements](#development-requirements)
    1. [Installing Development Requirements](#installing-development-requirements)
    1. [Development Dependencies](#development-dependencies)
    1. [Installing Development Dependencies](#installing-development-dependencies)
    1. [Building for Deployment](#building-for-deployment)
1. [License](#license)
1. [Appendix](#appendix)

---

## Installation

**General Cluster** is available as [an npm package](https://www.npmjs.com/package/general-cluster), which you can install from the command-line:

```sh
npm install general-cluster
```

Then, require the **General Cluster** module for use in a desired file:

```js
var GeneralCluster = require('general-cluster');
```

---

### Basic Usage Example

**General Cluster** is simple to use.

1. Setup your _Express_ application as you normally would
2. Instead of calling `listen()` to start your _Express_ server, pass your application to **General Cluster**
3. Your application will then be served from a node *cluster*

```js
var GeneralCluster = require('general-cluster'),
    express = require('express'),
    app = express();

// setup express application configuration and routes, e.g.,
app.get('/*', function(req, res) {
  res.send('Hello World');
});

// pass configured express app to GeneralCluster to start server
var clusterApp = GeneralCluster(app);
```

## Contributing to _General Cluster_

We welcome contributions, but please read our [contribution guidelines](CONTRIBUTING.md) before submitting your work. The development requirements and instructions are below.

## Development Requirements

- Node 0.10.x
- npm 2.x.x

### Installing Development Requirements

Install Node (bundled with npm) using [Homebrew](http://brew.sh/):

```sh
brew install node
```

## Development Dependencies

- grunt-cli (global install)
- grunt
- grunt-contrib-uglify

### Installing Development Dependencies

Install project and development dependencies using npm:

```sh
npm install
```

## Building for Deployment

To build `src/general-cluster.js` into `dist/general-cluster.min.js`, use the following grunt task:

```sh
grunt build
```

---

## [License](LICENSE.md)

**General Cluster** - express running on node clusters

_Copyright (C) 2015 Clark Feusier <cfeusier@gmail.com> - All Rights Reserved_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[**COMPLETE LICENSE**](LICENSE.md)

---

## Appendix

From the [Node Cluster](https://nodejs.org/api/cluster.html) documentation:

> A single instance of Node runs in a single thread. To take advantage of multi-core systems, one can launch a cluster of Node processes to handle the load. Using Node's cluster allows one to easily create child processes that all share server ports.

#### [Back to Top](#)

---

&copy; 2015 [Clark Feusier](http://clarkfeusier.com). All rights reserved.
