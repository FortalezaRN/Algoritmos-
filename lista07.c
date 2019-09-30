#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>
int main()
{
  float a=90000000, b=200000000;
  int anos = 0;
  while(a < b){
    anos++;
    a=(a*0.3) + a;
    b=(b*0.15) + b;
    //printf("valor de %f \n",a);
    //printf("valor de %f \n",b);

  }
  printf("demorou %d para A ultrapasar B. \n",anos);
}