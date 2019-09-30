#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>
int main()
{
  char str[20], strContrario[20], count=0;
  bool verificaPoli = true;

  printf("digite seu nome: ");
  scanf("%s", str);
  for(int i = strlen(str); i >= 0; i--){
    strContrario[i] = str[i];
  }
  for(int j = strlen(str)-1; j >= 0; j--){
    if(strContrario[count] != str[j]){
      verificaPoli = false;
    }
    count++;
  }
  if(verificaPoli){
    printf("É palíndromo \n");
  } else{
    printf("Nao é palíndromo \n");
  }
}