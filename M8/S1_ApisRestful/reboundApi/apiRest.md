# API RESTful para Gestión de Tickets de Servicio

## Recursos Principales
#### Realice el diseño de una API RESTful, que permita la gestión de tickets de servicios de una operadora telefónica. Cada ticket posee su id, y se pueden crear un número indefinido de mensajes para éste. Además, poseen dos estados: “abierto” y “cerrado”. Se pueden buscar por los recientemente actualizados,
#### recientemente cerrados.
### Tickets

# API RESTful para la Gestión de Tickets de Servicios

## Introducción
Esta API permite la gestión de tickets de servicios de una operadora telefónica. Cada ticket tiene un identificador único (ID) y puede tener múltiples mensajes asociados. Además, los tickets poseen dos estados posibles: "abierto" y "cerrado". La API también proporciona funcionalidades para buscar tickets recientemente actualizados y recientemente cerrados.

---

## Endpoints

### **Tickets**

#### Crear un nuevo ticket
**POST** `/tickets`

- **Descripción:** Crea un nuevo ticket.
- **Request Body:**
  ```json
  {
    "title": "string",
    "description": "string",
    "state": "abierto"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "string",
    "description": "string",
    "state": "abierto",
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  }
  ```

#### Obtener todos los tickets
**GET** `/tickets`

- **Descripción:** Recupera todos los tickets.
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "string",
      "description": "string",
      "state": "abierto",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-01T00:00:00Z"
    }
  ]
  ```

#### Obtener un ticket por ID
**GET** `/tickets/:id`

- **Descripción:** Recupera un ticket específico por su ID.
- **Response:**
  ```json
  {
    "id": 1,
    "title": "string",
    "description": "string",
    "state": "abierto",
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-01-01T00:00:00Z"
  }
  ```

#### Actualizar un ticket
**PUT** `/tickets/:id`

- **Descripción:** Actualiza un ticket específico.
- **Request Body:**
  ```json
  {
    "title": "string",
    "description": "string",
    "state": "cerrado"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Ticket actualizado correctamente."
  }
  ```

#### Eliminar un ticket
**DELETE** `/tickets/:id`

- **Descripción:** Elimina un ticket específico por su ID.
- **Response:**
  ```json
  {
    "message": "Ticket eliminado correctamente."
  }
  ```

### **Mensajes**

#### Agregar un mensaje a un ticket
**POST** `/tickets/:id/messages`

- **Descripción:** Agrega un mensaje a un ticket específico.
- **Request Body:**
  ```json
  {
    "message": "string"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "ticketId": 1,
    "message": "string",
    "createdAt": "2025-01-01T00:00:00Z"
  }
  ```

#### Obtener mensajes de un ticket
**GET** `/tickets/:id/messages`

- **Descripción:** Recupera todos los mensajes de un ticket específico.
- **Response:**
  ```json
  [
    {
      "id": 1,
      "ticketId": 1,
      "message": "string",
      "createdAt": "2025-01-01T00:00:00Z"
    }
  ]
  ```

### **Búsquedas**

#### Buscar tickets recientemente actualizados
**GET** `/tickets/updated`

- **Descripción:** Recupera los tickets ordenados por la última fecha de actualización.
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "string",
      "description": "string",
      "state": "abierto",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-01T01:00:00Z"
    }
  ]
  ```

#### Buscar tickets recientemente cerrados
**GET** `/tickets/closed`

- **Descripción:** Recupera los tickets que han sido cerrados recientemente.
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "string",
      "description": "string",
      "state": "cerrado",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-01T01:00:00Z"
    }
  ]
  ```
        