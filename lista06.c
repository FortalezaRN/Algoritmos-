#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>
int main()
{
  float salario, resultado;
  int ano = 5;
  printf("digite o valor do salario\n");
  scanf("%f",&salario);
  for(int i = ano; i > 0; i--){
    resultado += ((salario * 11)/100);
    salario = ((salario * 11)/100) + salario;
    printf("salario :%f\n",resultado);
  }
  printf("resultado: %f \n",resultado);
}