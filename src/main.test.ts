// Copyright (c) 2022 Northern Star
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { status, client } from './main'

async function test () {
  await status.isOnline().then(console.log)
  await client.location().then(console.log)
}

test()
