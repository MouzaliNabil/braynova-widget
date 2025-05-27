<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@latest/dist/chat.bundle.es.js'

  createChat({
    webhookUrl: 'https://braynova.app.n8n.cloud/webhook/854c829c-2ce6-426f-89e2-ed44d33182f3/chat',
    title: '💎 Chatbot Hera Luna',
    subtitle: 'Discutons de pierres naturelles ✨',
    description: 'Pose ta question ici.',
    mode: 'window',
    theme: {
      color: '#E91E63',
      logoUrl: 'https://mouzalinabil.github.io/braynova-widget/chat-icon.png'
    }
  })
</script>
