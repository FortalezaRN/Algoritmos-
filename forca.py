from random import *

def colocaTraco(pE):
  texto = ""
  for i in range(len(pE)):
    texto += "_"
  return texto

palavras = ['python', 'javascript', 'cobol']
palavraEscolhida = palavras[randint(0,2)]
digitado = ""
nTeveLetra = True
erro = 0
palavraComTraco = list(colocaTraco(palavraEscolhida))
print("A dica é: uma linguagem de programação \n\n")

while(''.join(palavraComTraco) != palavraEscolhida):
  digitado = input("Digite um Letra: ")
  for i, j in enumerate(palavraEscolhida):
    #for g, h in enumerate(digitado):
    if(digitado == j):
      palavraComTraco[i] = digitado
      nTeveLetra = False
  if(nTeveLetra):
    erro+=1
    print("Você errou pela "+str(erro)+"ª vez. Tente de novo!")
  nTeveLetra = True
  print("\n")
  if(erro>5):
    print("Você foi enforcado! A palavra era: "+palavraEscolhida)
    break
  print("A palavra é: "+ ''.join(palavraComTraco))