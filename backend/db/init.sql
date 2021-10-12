CREATE TABLE IF NOT EXISTS polls (
    id TEXT NOT NULL UNIQUE,
    question TEXT NOT NULL,
    options TEXT NOT NULL,
    settings TEXT NOT NULL,
    PRIMARY KEY(id)
)