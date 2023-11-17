package challenges.Java;

import java.util.Locale;
import java.util.Scanner;

/**
 * AbrindoContas
 */
public class AbrindoContas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        scanner.useLocale(Locale.US);

        String numeroConta = scanner.nextLine();
        String nomeTitular = scanner.nextLine();
        double saldo = scanner.nextDouble();

        //TODO: Criar uma instância de "ContaBancaria" com os valores de Entrada.
        ContaBancaria contaBancaria = new ContaBancaria(numeroConta, nomeTitular, saldo);

        System.out.println("\nInformacoes:");
        //TODO: Imprimir as informações da conta usando o objeto criado above.
        System.out.println(contaBancaria.infos());
    }

    public static class ContaBancaria {
        String numero;
        String titular;
        double saldo;

        public ContaBancaria(String numero, String titular, double saldo) {
            this.numero = numero;
            this.titular = titular;
            this.saldo = saldo;
        }
        
        public String infos() {
            return "Conta: " + numero + "\nTitular: " + titular + "\nSaldo: R$ " + saldo;
        } 
    }
}


