import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
test('entrypoint links application',()=>{const html=readFileSync('index.html','utf8');assert.ok(html.includes('src="./src/app.js"'));});
test('all research sections appear in navigation',()=>{const js=readFileSync('src/app.js','utf8');for(const name of ['Evidence Lab','Synthesis Studio','Research Workbench'])assert.ok(js.includes(name));});
