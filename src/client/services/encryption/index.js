/**!
 *
 * Copyright (c) 2015-2017 Cisco Systems, Inc. See LICENSE file.
 */

'use strict';

require('../feature');
var EncryptionService = require('./encryption');
var Spark = require('../../../spark-core');
Spark.registerService('encryption', EncryptionService);
module.exports = EncryptionService;
