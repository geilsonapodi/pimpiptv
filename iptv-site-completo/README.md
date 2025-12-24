# 🎬 Premium IPTV - Site Completo

Site profissional de IPTV com WhatsApp flutuante e link de painel de vendas.

## 📁 Estrutura de Arquivos

```
iptv-site-completo/
├── index.html              # Página principal
├── css/
│   ├── style.css          # Estilos principais
│   └── whatsapp.css       # Estilos do WhatsApp flutuante
├── js/
│   ├── script.js          # JavaScript principal
│   └── formulario-validacao-simples.js  # Validação do formulário
├── images/
│   ├── iptv-hero.png
│   ├── iptv-channels.png
│   ├── iptv-device.png
│   ├── iptv-security.png
│   └── iptv-support.png
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Site Localmente

Abra o arquivo `index.html` no navegador:
- Clique 2x no arquivo `index.html`
- Ou use um servidor local (recomendado)

### 2. Usar Servidor Local (Recomendado)

**Windows:**
```bash
python -m http.server 8000
```

**Mac/Linux:**
```bash
python3 -m http.server 8000
```

Depois acesse: `http://localhost:8000`

## 🔧 Customizações Importantes

### 1. Alterar Número do WhatsApp

Abra `index.html` e procure por:
```html
<a href="https://wa.me/5511999999999?text=...">
```

Mude `5511999999999` para seu número (com código do país)

### 2. Alterar Link do Painel de Vendas

Procure por:
```html
<a href="https://seu-painel.com" target="_blank">
```

Mude `https://seu-painel.com` para o URL do seu painel

### 3. Alterar Email do Formspree

Procure por:
```html
<form action="https://formspree.io/f/xyzabc123" method="POST">
```

Mude `xyzabc123` para seu Form ID do Formspree

### 4. Alterar Informações de Contato

Procure pela seção `<footer>` e atualize:
- Email
- Telefone
- Links do WhatsApp

## 🎨 Personalização de Cores

Abra `css/style.css` e altere as variáveis CSS:

```css
:root {
    --primary-color: #0066ff;      /* Azul principal */
    --accent-color: #00d4ff;       /* Ciano */
    --dark-bg: #050812;            /* Fundo escuro */
    --darker-bg: #0a0e27;          /* Fundo mais escuro */
    --card-bg: #1a1f3a;            /* Fundo dos cards */
    --border-color: #2a3050;       /* Cor das bordas */
    --text-primary: #ffffff;       /* Texto principal */
    --text-secondary: #b0b8d4;     /* Texto secundário */
}
```

## 💰 Alterar Preços dos Planos

Abra `index.html` e procure pela seção `<!-- Plans Section -->`:

```html
<p class="price"><span class="amount">R$ 29</span><span class="period">/mês</span></p>
```

Mude os valores conforme necessário.

## 📧 Configurar Formulário de Contato

### Opção 1: Formspree (Recomendado)

1. Acesse https://formspree.io
2. Crie uma conta
3. Crie um novo formulário
4. Copie o Form ID
5. Cole no HTML: `action="https://formspree.io/f/SEU_ID"`

### Opção 2: Validação Local

O formulário já tem validação JavaScript incluída:
- Nome (mínimo 3 caracteres)
- Email (formato válido)
- Assunto (mínimo 3 caracteres)
- Mensagem (mínimo 10 caracteres)

## 📱 Responsividade

O site é totalmente responsivo para:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (até 480px)

## 🔒 Segurança

- ✅ Validação de formulário no navegador
- ✅ Proteção contra XSS
- ✅ Links seguros (target="_blank")
- ✅ HTTPS recomendado

## 🚀 Publicar Online

### Opção 1: Netlify (Gratuito)

1. Acesse https://netlify.com
2. Faça upload dos arquivos
3. Pronto! Site online

### Opção 2: GitHub Pages (Gratuito)

1. Crie repositório `seu-username.github.io`
2. Faça upload dos arquivos
3. Site fica em `https://seu-username.github.io`

### Opção 3: Hostinger (Pago)

1. Compre hospedagem
2. Faça upload via FTP
3. Configure domínio

## 📊 Funcionalidades Incluídas

✅ **WhatsApp Flutuante**
- Botão flutuante com animação
- Link direto para conversa
- Responsivo para mobile

✅ **Link do Painel de Vendas**
- Seção dedicada
- Botão de acesso
- Descrição de recursos

✅ **Formulário de Contato**
- Validação completa
- Feedback visual
- Integração com Formspree

✅ **Planos de Assinatura**
- 3 planos diferentes
- Destaque para mais popular
- Botões de ação

✅ **Design Premium**
- Tema escuro moderno
- Gradientes neon
- Animações suaves

## 🎯 Próximos Passos

1. ✅ Alterar número do WhatsApp
2. ✅ Alterar URL do painel de vendas
3. ✅ Configurar formulário (Formspree)
4. ✅ Personalizar cores (opcional)
5. ✅ Fazer upload para hospedagem
6. ✅ Testar em diferentes dispositivos

## 📞 Suporte

Para dúvidas sobre:
- **Formspree**: https://formspree.io/docs
- **Netlify**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com

## 📄 Licença

Este projeto é fornecido como está. Sinta-se livre para usar e modificar.

---

**Criado com ❤️ por Manus AI**

Última atualização: Dezembro 2024
