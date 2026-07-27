# Queen Juice — Design System

Site mobile-first (vitrine + cardápio com pedido via WhatsApp) para a marca de sucos
naturais **Queen Juice** (@queenjuice.sn). Identidade "realeza": preto profundo, dourado
e roxo, com toques de magenta (fita "edição selecionada"). Baseado no feed real: garrafas
de rótulo preto com coroa dourada, sucos de manga e maracujá.

## Princípios
- **Mobile-first sempre**: layout desenhado para a tela do celular primeiro; desktop é um
  aprimoramento (colunas, mais respiro). Alvos de toque ≥ 44px. CTA de WhatsApp sempre
  alcançável (botão flutuante + barra de pedido fixa).
- **Realeza acessível**: elegante mas apetitoso. Fotos reais do produto em destaque.
- **Conteúdo em pt-BR**.

## Cores (CSS variables)
- `--qj-black`: #0B0A0D  (fundo principal)
- `--qj-black-2`: #141017 (cards / seções alternadas, tom plum escuro)
- `--qj-gold`: #E7C36B  (dourado principal — texto de marca, detalhes)
- `--qj-gold-deep`: #C9A24B (gradiente do dourado)
- `--qj-purple`: #6D2E7A (roxo real)
- `--qj-magenta`: #C2287D (fita/accent vibrante para CTAs secundários)
- `--qj-cream`: #F5EEDD (texto claro principal)
- `--qj-muted`: #B7ADC2 (texto secundário)
- `--qj-mango`: #F5A623 (accent de sabor manga)
- `--qj-maracuja`: #F2C438 (accent de sabor maracujá)
- Gradiente dourado: `linear-gradient(135deg,#E7C36B,#C9A24B)`

## Tipografia (Google Fonts)
- **Wordmark / marca**: `Cinzel` (serif romana, caixa alta — ecoa o logo "QUEEN JUICE").
- **Títulos de seção**: `Playfair Display` (serif display, elegante).
- **Corpo / UI**: `Poppins` (sans, legível, moderno).
- Hierarquia por tamanho e peso; entrelinha generosa (1.6 no corpo).

## Layout
- Container central máx. `max-w-6xl`, padding lateral `px-5 sm:px-8`.
- Seções empilhadas verticais com bom respiro (`py-16 sm:py-24`).
- Alternância de fundo entre `--qj-black` e `--qj-black-2` para ritmo.
- Cardápio: cards de sabor com foto, 3 tamanhos (300ml/500ml/1L) e preços; seletor de
  quantidade e opção "com/sem açúcar" que alimenta o pedido no WhatsApp.
- Galeria: grid responsivo (2 col mobile → 3+ desktop) com fotos reais do feed.

## Componentes
- **Header** fixo translúcido (blur) com wordmark + link WhatsApp.
- **Hero**: fundo escuro, coroa dourada, headline serif, foto do produto, CTAs.
- **CrownMark**: ícone de coroa (lucide `Crown`) em dourado usado como selo/divisor.
- **Cards de sabor** com borda dourada sutil e brilho no hover.
- **OrderBar**: barra inferior fixa que mostra itens do pedido e "Finalizar no WhatsApp".
- **WhatsApp float**: botão circular verde fixo (canto inferior direito).
- **Botões**: primário = gradiente dourado sobre preto; secundário = contorno dourado;
  whatsapp = verde (#25D366).

## Motion
- Revelação suave no scroll (fade + subida) com Motion, escalonada por seção.
- Hover discreto nos cards (leve elevação + brilho dourado). Sem exageros.

## UX do pedido (sem backend por enquanto)
- Estado do carrinho no cliente (Context). Cada item: sabor, tamanho, qtd, com/sem açúcar.
- "Finalizar no WhatsApp" abre `wa.me/55DDDNUMERO` com mensagem pré-preenchida listando
  itens, quantidades e total. (Sistema de delivery próprio virá depois.)
