#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>
int main()
{
  int conjA[20], conjB[20], conjC[20], qtd, add=0, size;
  char resultado[20];

  printf("digite a quantidade de vezes: ");
  scanf("%d", &qtd);

  for(int i = 0; i < qtd; i++){
    printf("digite o valor do conjunto A da posicao  %d: \n",i);
    scanf("%d", &conjA[i]);
    printf("digite o valor do conjunto B da posicao  %d: \n",i);
    scanf("%d", &conjB[i]);
  }
  for(int i = 0; i < qtd; i++){
    printf("digite a quantidade de vezes: %d \n",conjA[i]);
    for(int j = 0; j < qtd; j++){
      if(conjA[i] == conjB[j]){
        printf("fou \n");
        conjC[add] = conjB[j];
        add++;
      }
    }
  }

  for(int i = 0; i < add; i++){
    printf("%d, ",conjC[i]);
  }
  printf("\n");

}