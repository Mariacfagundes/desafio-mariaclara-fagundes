class CaixaDaLanchonete {

        calcularValorDaCompra(formaDePagamento, itens) {
          const precos = {
            cafe: 2.50,
            chantily: 1.00,
            combo1: 5.98,
          };
      
          let total = 0;
      
          for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
      
            if (!(codigo in precos)) {
              return "Item inválido!";
            }
      
            if (codigo === 'chantily' && !itens.includes('cafe,1')) {
              return "Item extra não pode ser pedido sem o principal";
            }
      
            total += precos[codigo] * quantidade;
          }
      
          if (formaDePagamento === 'debito') {
            total *= 0.95; // 5% de desconto para pagamento em débito
          } else if (formaDePagamento !== 'credito' && formaDePagamento !== 'dinheiro') {
            return "Forma de pagamento inválida!";
          }
      
          return `R$ ${total.toFixed(2).replace('.', ',')}`;
        }
      }
      