<script type="module">
  import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@latest/dist/chat.bundle.es.js'

  createChat({
    webhookUrl: 'https://braynova.app.n8n.cloud/webhook/51f64acb-d060-414c-9ee8-a649d93a7c08/chat',
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
