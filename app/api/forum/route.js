import { NextResponse } from 'next/server';
var fs = require('fs');
 
export async function GET() {
  var msg = fs.readFileSync("mydata.txt")
 
  return NextResponse.json({ message : msg });
}
