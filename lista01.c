#include <stdio.h>
#include <stdbool.h>
int main()
{
  int vetor[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9 ,10};
  bool contem = false;
  int value;
  printf("Digite o valor a ser encontrado no vetor!\n");
  scanf("%d", &value);
  for(int i = 0; i < 10; i++){
    if(vetor[i] == value){
      contem = true;
      break;
    }
  }

  if(contem){
    printf("valor %d foi encontrado no vetor \n", value);
  } else {
    printf("valor %d nao foi encontrado no vetor \n", value);
  }
}