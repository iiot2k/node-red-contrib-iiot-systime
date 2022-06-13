/**
 * Copyright 2022 Ocean (iiot2k@gmail.com).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

"use strict";

module.exports = function(RED) {

    const dgram = require('dgram');

	RED.nodes.registerType("iiot-systime", function(n) {
		var node = this;
		RED.nodes.createNode(node, n);

		node.ampm = n.ampm;
		node.tupdate = n.tupdate;
		node.name = "sys time";

		node.id_tupdate = setInterval(function () {
			var dt = new Date();
			var hr = dt.getHours();
			var ap = (hr >= 12) ? 1 : 0;
			var hr = (node.ampm) ? hr % 12 : hr;
			node.send({ payload: [dt.getSeconds(), dt.getMinutes(), hr, ap, dt.getDay(), dt.getDate(), dt.getMonth() + 1, dt.getFullYear()]});
		}, node.tupdate);

		node.on('close', function () {
			clearInterval(node.id_tupdate);
		});
	});
}
