function matrixFromQuaternion(x, y, z, w)
{
  var m = Array(16);

  var x2 = x + x, y2 = y + y, z2 = z + z;
  var xx = x * x2, xy = x * y2, xz = x * z2;
  var yy = y * y2, yz = y * z2, zz = z * z2;
  var wx = w * x2, wy = w * y2, wz = w * z2;

  m[0] = 1 - (yy + zz);
  m[4] = xy - wz;
  m[8] = xz + wy;

  m[1] = xy + wz;
  m[5] = 1 - (xx + zz);
  m[9] = yz - wx;

  m[2] = xz - wy;
  m[6] = yz + wx;
  m[10] = 1 - (xx + yy);

  m[3] = m[7] = m[11] = 0;
  m[12] = m[13] = m[14] = 0;
  m[15] = 1;

  return m;
}

function cssMatrixFromElements(e)
{
  return "matrix3d(" + e.join(",") + ")";
}

function cssMatrixFromOrientation(q)
{
  if (!q)
    return "";
  // Note the -Y here, to account for CSS Y orientation
  return cssMatrixFromElements(matrixFromQuaternion(q.x, -q.y, q.z, q.w));
}
