#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>
int main()
{
  int i = 10;
  int j = 5;
  bool a, b, c, d, e;
  double x = 12.0;
  int w = (i / j)*2;
  float z = ((x * 1.1 ) + pow(i,2))/pow(j,2); //tive que incluir a biblioteca math para poder fazer potencia
  printf("valor de w: %d\n", w);
  printf("valor de z: %f\n", z);

  a = i < j;
  b = i > x;
  c = x == i;
  d = (i < x) || (j == 3);
  e = z > 5;
  printf("%s", a ? "true" : "false"); //eu usei um operador ternario 
  printf("\n");
  printf("%s", b ? "true" : "false");
  printf("\n");
  printf("%s", c ? "true" : "false");
  printf("\n");
  printf("%s", d ? "true" : "false");
  printf("\n");
  printf("%s", e ? "true" : "false"); 
  printf("\n");
  printf("%s", (w > 5) ? "true" : "false"); 
  printf("\n");
}