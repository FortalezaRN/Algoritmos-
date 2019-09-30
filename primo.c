#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>
int main()
{
  int num, contador = 1;
  printf("digite um numero: \n");
  scanf("%d", &num);
	bool primo = true;
  if ( num != 2 && num % 2 == 0){
    primo = false;
  } else {
    for(int i = num/2; i > 1; i--){
      if ( num % i == 0) {
        contador++;
      }
    }
    if(contador > 1) {
      primo = false;
    }
  }
  if(primo){
    printf("É primo \n");
  } else {
    printf("Não é primo \n");
  }
}