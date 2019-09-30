#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>
int main()
{
  int a, b, resultado = 0;
  printf("digite o valor de A \n");
  scanf("%d",&a);
  printf("digite o valor de B \n");
  scanf("%d",&b);
  for(int i = a; i > 0; i--){
    resultado = resultado + b;
  }
  printf("A vezes B é igual: %d \n",resultado);
}