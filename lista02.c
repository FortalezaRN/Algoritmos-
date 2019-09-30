#include <stdio.h>
#include <stdbool.h>
#include <string.h>
int main()
{
  // int i = 2;
  //faltou a chave mas colocando, aparece: "Quê?\n", "Como?\n", "Nam!\n"
  // switch(i){
  //   case 1:
  //     printf("Hein?\n");
  //   case 2:
  //     printf("Quê?\n");
  //   case 3:
  //     printf("Como?\n");
  //   default:
  //     printf("Nam!\n");
  // }
  // esta errado pois tem um "]" no paratense do if mas o corrigindoo parece 0
  char s[] = "reviver";
  int i, teste=1;
  for (i = 0; i < strlen(s); i++){
    if (s[i] != strlen(s)-1-i){
      teste = 0;
    }
  }
  printf("%d", teste);

}