#include <stdio.h>
 
int main() {
 
    int dias, ano, mes, dia;

    scanf(" %d", &dias);

    ano = (int)(dias/365);
    mes = (int)((dias % 365) / 30);
    dia = (int)((dias % 365) - 30 * mes);

    printf("%d ano(s)\n", ano);
    printf("%d mes(s)\n", mes);
    printf("%d dia(s)\n", dia);    
 
    return 0;
}