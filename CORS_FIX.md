# Configuração CORS para Firebase Storage

## Problema
Imagens do Firebase Storage não carregavam no Flutter Web devido a bloqueio de CORS.

## Solução
Configurar CORS no bucket do Google Cloud Storage.

## Passos executados

### 1. Criar arquivo `cors.json`:
```json
[
  {
    "origin": ["*"],
    "method": ["GET", "HEAD"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type", "Content-Length", "Content-Range", "Access-Control-Allow-Origin"]
  }
]
```

### 2. Aplicar no bucket:
```bash
gsutil cors set cors.json gs://na-rede-loyalty-hub-club-4948.firebasestorage.app
gsutil cors set cors.json gs://loyalty-hub-1f47c.firebasestorage.app
```

### 3. Verificar:
```bash
gsutil cors get gs://na-rede-loyalty-hub-club-4948.firebasestorage.app
gsutil cors get gs://loyalty-hub-1f47c.firebasestorage.app
```

## Para outros buckets de clientes

Repetir o mesmo processo substituindo o nome do bucket:

```bash
gsutil cors set cors.json gs://NOME-DO-BUCKET.firebasestorage.app
```

## Pré-requisitos

- Google Cloud SDK instalado (`gcloud`)
- Autenticado com conta que tem acesso ao projeto: `gcloud auth login`

## Data
12/12/2024
