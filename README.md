# Plann.er

A comprehensive trip management system where users can create and organize trips, invite participants, and plan activities. The system supports sending confirmation emails and updates, ensuring smooth coordination and communication throughout the trip planning process.

## Requisites

- Node.js;

## Setup

- Clone the repository;
- Install dependencies (`npm install`);
- Copy `.env.example` file (`cp .env.example .env`);
- Run application (`npm run dev`);
- Test it! (I personally recommend testing with [Hoppscotch](https://hoppscotch.io/)).

## HTTP

### POST `/trips`

Create a new trip.

#### Request body

```json
{
  "destination": "Porto, Portugal",
  "starts_at": "2025-07-21T17:32:28Z",
  "ends_at": "2025-07-10T18:30:28Z",
  "emails_to_invite": ["test@test.com", "test2@test.com"],
  "owner_name": "Vin Diesel",
  "owner_email": "vindiesel@email.com"
}
```

#### Response body

```json
{
  "tripId": "123e4567-e89b-12d3-a456-426614174000"
}
```

### GET `/trips/:tripId`

Return details from a single trip.

#### Response body

```json
{
  "trip": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "destination": "…",
    "starts_at": "2024-08-11T12:55:20.233Z",
    "ends_at": "2024-08-11T12:55:20.233Z",
    "is_confirmed": true
  }
}
```

### GET `/trips/:tripId/confirm`

Confirm a trip and send e-mail invitations.

### PUT `/trips/:tripId`

Update a trip.

#### Request body

```json
{
  "destination": "…",
  "starts_at": "2025-07-21T17:32:28Z",
  "ends_at": "2025-07-10T18:30:28Z"
}
```

### PATCH `/participants/:participantId/confirm`

Confirms a participant on a trip.

### POST `/trips/:tripId/invites`

Invite someone to the trip.

#### Request body

```json
{
  "email": "…@email.com"
}
```

### GET `/trips/:tripId/participants`

Get a trip participants.​

#### Response body

```json
{
  "participants": [
    {
      "id": "…",
      "name": "…",
      "email": "hello@example.com",
      "is_confirmed": true
    }
  ]
}
```

### POST `/trips/:tripId/activities`

Create a trip activity.​

#### Request body

```json
{
  "occurs_at": "2017-07-21T17:32:28Z",
  "title": "…"
}
```

#### Response body

```json
{
  "activityId": "123e4567-e89b-12d3-a456-426614174000"
}
```

### GET `/trips/:tripId/activities`

Get a trip activities.​

#### Response body

```json
{
  "activities": [
    {
      "date": "2024-08-11T13:25:29.433Z",
      "activities": [
        {
          "id": "123e4567-e89b-12d3-a456-426614174000",
          "title": "…",
          "occurs_at": "2024-08-11T13:25:29.433Z"
        }
      ]
    }
  ]
}
```

### POST `/trips/:tripId/links`

Create a trip link.

#### Request body

```json
{
  "title": "…",
  "url": "https://example.com"
}
```

#### Response body

```json
{
  "linkId": "123e4567-e89b-12d3-a456-426614174000"
}
```

### GET `/trips/:tripId/links`

Get a trip links.​

#### Response body

```json
{
  "links": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "title": "…",
      "url": "https://example.com"
    }
  ]
}
```
