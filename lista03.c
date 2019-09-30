#include <stdio.h>
#include <stdbool.h>
#include <string.h>
int main()
{
  int a, b;
  for(int i = 0; i < 5; i++){
    printf("digite o valor de A \n");
    scanf("%d", &a);
    printf("digite o valor de B \n");
    scanf("%d", &b);
    printf("O resultado da multiplicacao de A vezes B eh: %d \n", a*b);
  }

}