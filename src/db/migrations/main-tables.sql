CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'GENDER_TYPE'
        AND typtype = 'e'
    )
    THEN
        CREATE TYPE GENDER_TYPE AS ENUM (
            'MALE','FEMALE'
        );
    END IF;
END $$;


DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'CHAT_TYPE'
        AND typtype = 'e'
    )
    THEN
        CREATE TYPE CHAT_TYPE AS ENUM (
            'PRIVATE','GROUP'
        );
    END IF;
END $$;


DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'MEDIA_TYPE'
        AND typtype = 'e'
    )
    THEN
        CREATE TYPE MEDIA_TYPE AS ENUM (
            'PHOTO', 'VIDEO', 'AUDIO', 'FILE'
        );
    END IF;
END $$;


DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'CHAT_TYPE'
        AND typtype = 'e'
    )
    THEN
        CREATE TYPE CHAT_TYPE AS ENUM (
            'PRIVATE','GROUP'
        );
    END IF;
END $$;


DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'MEDIA_TYPE'
        AND typtype = 'e'
    )
    THEN
        CREATE TYPE MEDIA_TYPE AS ENUM (
            'PHOTO', 'VIDEO', 'AUDIO', 'FILE'
        );
    END IF;
END $$;


DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'USER_TYPE'
        AND typtype = 'e'
    )
    THEN
        CREATE TYPE USER_TYPE AS ENUM (
          'ADMIN', 'EMPLOYEE', 'USER'
        );
    END IF;
END $$;


CREATE TABLE IF NOT EXISTS "roles" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "title" VARCHAR(255) NOT NULL,

  "user" BOOLEAN NOT NULL DEFAULT false,
  "user_created" BOOLEAN NOT NULL DEFAULT false,
  "user_updated" BOOLEAN NOT NULL DEFAULT false,
  "user_deleted" BOOLEAN NOT NULL DEFAULT false,

  "role" BOOLEAN NOT NULL DEFAULT true,
  "role_created" BOOLEAN NOT NULL DEFAULT false,
  "role_updated" BOOLEAN NOT NULL DEFAULT false,
  "role_deleted" BOOLEAN NOT NULL DEFAULT false,

  "job" BOOLEAN NOT NULL DEFAULT true,
  "job_created" BOOLEAN NOT NULL DEFAULT false,
  "job_updated" BOOLEAN NOT NULL DEFAULT false,
  "job_deleted" BOOLEAN NOT NULL DEFAULT false,

  "skill" BOOLEAN NOT NULL DEFAULT true,
  "skill_created" BOOLEAN NOT NULL DEFAULT false,
  "skill_updated" BOOLEAN NOT NULL DEFAULT false,
  "skill_deleted" BOOLEAN NOT NULL DEFAULT false,

  "project" BOOLEAN NOT NULL DEFAULT true,
  "project_created" BOOLEAN NOT NULL DEFAULT false,
  "project_updated" BOOLEAN NOT NULL DEFAULT false,
  "project_deleted" BOOLEAN NOT NULL DEFAULT false,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS roles__is_deleted__idx ON "roles"( "is_deleted");
CREATE UNIQUE INDEX IF NOT EXISTS roles__title___deletedat_idx ON "roles"("title","deleted_at");

-- insert admin role default
INSERT INTO "roles" ("id", "title", "user", "user_created", "user_updated", "user_deleted", "role", "role_created", "role_updated", "role_deleted", "job", "job_created", "job_updated", "job_deleted", "skill", "skill_created", "skill_updated", "skill_deleted", "project", "project_created", "project_updated", "project_deleted") 
VALUES("9ecdb13d-c38c-4172-9ebc-42a0f3d99c35", "ADMIN",  TRUE, TRUE, TRUE, TRUE,    TRUE, TRUE, TRUE, TRUE,     TRUE, TRUE, TRUE, TRUE,    TRUE, TRUE, TRUE, TRUE,  TRUE, TRUE, TRUE, TRUE) ON CONFLICT DO NOTHING;



CREATE TABLE IF NOT EXISTS "users" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "firstname" VARCHAR(255) NOT NULL,
  "lastname" VARCHAR(255) NOT NULL,
  "date_of_birth" TIMESTAMP(0) NOT NULL,
  "gender" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "phone" VARCHAR(70) NOT NULL,
  "photo" VARCHAR(255),
  "bio" VARCHAR(255),
  "address" VARCHAR(255),
  "role_id" UUID NOT NULL REFERENCES "roles"("id"),
  "type" USER_TYPE NOT NULL,
  "is_confirm" BOOLEAN NOT NULL DEFAULT FALSE,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS users_is_deleted_idx ON "users"("is_deleted");
CREATE INDEX IF NOT EXISTS users_email_is_deleted_idx ON "users"("email", "is_deleted");
CREATE INDEX IF NOT EXISTS users_phone_is_deleted_idx ON "users"("phone", "is_deleted");
CREATE UNIQUE INDEX IF NOT EXISTS users__email___deletedat_idx ON "users"("email","deleted_at");
CREATE UNIQUE INDEX IF NOT EXISTS users__phone___deletedat_idx ON "users"("phone","deleted_at");
CREATE UNIQUE INDEX IF NOT EXISTS users__type___deletedat_idx ON "users"("type","deleted_at") where "type" = 'ADMIN';


-- INSERT INTO "user" ("id", "firstname", "lastname", "date_of_birth", "gender", "email", "password", "phone", "role_id", "type")
-- VALUES("78c9a834-a258-4198-8d2b-6fd33bfcae62", "Ravshan", "Karimov", "1998-11-18", "MALE", "ravshanbekkrmv@gmail.com", "e10adc3949ba59abbe56e057f20f883e", "+998998137880", "9ecdb13d-c38c-4172-9ebc-42a0f3d99c35", "ADMIN") ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS "jobs" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "title" VARCHAR(255) NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS jobs_title_is_deleted_idx ON "jobs"("title", "is_deleted");
CREATE UNIQUE INDEX IF NOT EXISTS users__title__deletedat_idx ON "jobs"("title","deleted_at");


CREATE TABLE IF NOT EXISTS "user_status" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "info" VARCHAR(255) NOT NULL,
  "user_id" UUID NOT NULL REFERENCES "users" ("id"),
  "job_id" UUID NOT NULL REFERENCES "jobs" ("id"),
  "start_date" TIMESTAMP(0) NOT NULL,
  "end_date" TIMESTAMP(0),

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS user_status__user_id__job_id_idx ON "user_status"("user_id", "job_id");


CREATE TABLE IF NOT EXISTS "resume" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" UUID NOT NULL REFERENCES "users"("id"),
  "url" VARCHAR(255) NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS resume__user_id__is_deleted__idx ON "resume"("user_id", "is_deleted");


CREATE TABLE IF NOT EXISTS "metadata" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" UUID NOT NULL REFERENCES "users"("id"),
  "resume_id" UUID REFERENCES "resume"("id"),
  "key" VARCHAR(255) NOT NULL,
  "context" VARCHAR(255) NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS metadata__user_id__idx ON "metadata"("user_id");
CREATE INDEX IF NOT EXISTS metadata__key__idx ON "metadata"("key");


CREATE TABLE IF NOT EXISTS "chats" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "type" CHAT_TYPE NOT NULL DEFAULT 'PRIVATE',

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS chat__is_deleted__idx ON "chats"("is_deleted");

CREATE TABLE IF NOT EXISTS "chat_users" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "chat_id" UUID NOT NULL REFERENCES "chats" ("id"),
  "user_id" UUID NOT NULL REFERENCES "users" ("id"),


  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS chat__is_deleted__idx ON "chat_users"("is_deleted");

CREATE TABLE IF NOT EXISTS "messages" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "chat_id" UUID NOT NULL REFERENCES "chats"("id"),
  "reply_id" UUID REFERENCES "messages"("id"),
  "owner_id" UUID NOT NULL REFERENCES "users" ("id"),
  "text" TEXT,
  "status" BOOLEAN NOT NULL DEFAULT FALSE,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS messages__chat_id__is_deleted__idx ON "messages"("chat_id", "is_deleted");
CREATE INDEX IF NOT EXISTS messages__sender_id__receiver_id__idx ON "messages"("owner_id", "is_deleted");
CREATE INDEX IF NOT EXISTS messages__sender_id__receiver_id__idx ON "messages"("owner_id", "chat_id", "is_deleted");

CREATE TABLE IF NOT EXISTS "media" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "url" VARCHAR(255) NOT NULL,
  "file_name" VARCHAR(255) NOT NULL,
  "message_id" UUID NOT NULL REFERENCES "messages" ("id"),
  "type" MEDIA_TYPE NOT NULL,
  

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS media__message_id__is_deleted__idx ON "media"("message_id", "is_deleted");


CREATE TABLE IF NOT EXISTS "skills" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" VARCHAR(255) NOT NULL,
  

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS skills__name__is_deleted__idx ON "skills"("name", "is_deleted");
CREATE UNIQUE INDEX IF NOT EXISTS skills__name__is_deleted__idx ON "skills"("name", "deleted_at");

CREATE TABLE IF NOT EXISTS "user_skill" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" UUID NOT NULL REFERENCES "users" ("id"),
  "skill_id" UUID NOT NULL REFERENCES "skills" ("id"),
  

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS user_skill__user_id__skill_id__idx ON user_skill("user_id", "skill_id");

CREATE TABLE IF NOT EXISTS "projects" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(255) NOT NULL DEFAULT TRUE,
  "team_lead_id" UUID NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS projects__name__is_deleted__idx ON projects("name", "is_deleted");

CREATE TABLE IF NOT EXISTS "user_projects" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_id" UUID NOT NULL REFERENCES "users" ("id"),
  "project_id" UUID NOT NULL REFERENCES "projects" ("id"),
  "start_date" TIMESTAMP WITH TIME ZONE,
  "end_date" TIMESTAMP WITH TIME ZONE,
  "status" BOOLEAN NOT NULL DEFAULT FALSE,
  
  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users"("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users"("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS user_project__user_id__idx ON "user_projects"("user_id", "is_deleted");

-- - - - - - - - - - - - -  Task Manager - - - - - - - - - - - - - - 

CREATE TABLE IF NOT EXISTS "boards" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "project_id" UUID NOT NULL REFERENCES "projects" ("id"),
  "name" VARCHAR(255) NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS boards__project_id__is_deleted__idx ON boards ("name", "is_deleted");
CREATE INDEX IF NOT EXISTS boards__name__is_deleted__idx ON boards ("name", "is_deleted");
CREATE UNIQUE INDEX IF NOT EXISTS boards__project_id__name__deleted_at__idx ON boards ("project_id", "name", "deleted_at");


CREATE TABLE IF NOT EXISTS "taskbar" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "board_id" UUID NOT NULL REFERENCES "boards" ("id"),
  "name" VARCHAR(255) NOT NULL,
  "position" INTEGER NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS taskbar__board_id__is_deleted__idx ON taskbar ("board_id", "is_deleted");
CREATE INDEX IF NOT EXISTS taskbar__name__is_deleted__idx ON taskbar ("name", "is_deleted");
CREATE UNIQUE INDEX IF NOT EXISTS taskbar__board_id__name__deleted_at__idx ON taskbar ("board_id", "name", "deleted_at");


CREATE TABLE IF NOT EXISTS "labels" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "name" VARCHAR(255) NOT NULL,
  "colour" VARCHAR(255) NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS labels__name__is_deleted__idx ON labels ("name", "is_deleted");
CREATE UNIQUE INDEX IF NOT EXISTS labels__name__deleted_at__idx ON labels ("name", "deleted_at");


CREATE TABLE IF NOT EXISTS "tasks" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "taskbar_id" UUID NOT NULL REFERENCES "taskbar" ("id"),
  "label_id" UUID REFERENCES "labels" ("id"),
  "title" VARCHAR(255) NOT NULL,
  "position" INTEGER NOT NULL,
  "description" TEXT,
  "is_active" BOOLEAN DEFAULT TRUE,
  "start_date" TIMESTAMP DEFAULT NOW (),
  "end_date" TIMESTAMP,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS tasks__taskbar_id__is_deleted__idx ON tasks ("taskbar_id", "is_deleted");
CREATE INDEX IF NOT EXISTS tasks__title__is_deleted__idx ON tasks ("title", "is_deleted");


CREATE TABLE IF NOT EXISTS "comments" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "user_id" UUID NOT NULL REFERENCES "users" ("id"),
  "task_id" UUID NOT NULL REFERENCES "tasks" ("id"),
  "text" TEXT NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS comments__task_id__is_deleted__idx ON comments ("task_id", "is_deleted");


CREATE TABLE IF NOT EXISTS "checklist" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "task_id" UUID NOT NULL REFERENCES "tasks" ("id"),
  "name" VARCHAR(255) NOT NULL,
  "is_checked" BOOLEAN DEFAULT FALSE,
  "position" INTEGER NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS checklist__task_id__is_deleted__idx ON checklist ("task_id", "is_deleted");
CREATE UNIQUE INDEX IF NOT EXISTS checklist__task_id__name__deleted_at__idx ON checklist ("task_id", "name", "deleted_at");


CREATE TABLE IF NOT EXISTS "activity" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "task_id" UUID NOT NULL REFERENCES "tasks" ("id"),
  "user_id" UUID NOT NULL REFERENCES "users" ("id"),
  "activity" VARCHAR(500) NOT NULL,
  
  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS activity__task_id__is_deleted__idx ON activity ("task_id", "is_deleted");


CREATE TABLE IF NOT EXISTS "attachment" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "task_id" UUID NOT NULL REFERENCES "tasks" ("id"),
  "url" VARCHAR(255) NOT NULL,

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS attachment__id__is_deleted__idx ON boards ("id", "is_deleted");
CREATE INDEX IF NOT EXISTS attachment__task_id__is_deleted__idx ON attachment ("task_id", "is_deleted");


CREATE TABLE IF NOT EXISTS "board_members" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "user_id" UUID NOT NULL REFERENCES "users" ("id"),
  "board_id" UUID NOT NULL REFERENCES "boards" ("id"),

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS board_members__board_id__is_deleted__idx ON board_members ("board_id", "is_deleted");


CREATE TABLE IF NOT EXISTS "task_members" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
  "board_member_id" UUID NOT NULL REFERENCES "board_members" ("id"),
  "task_id" UUID NOT NULL REFERENCES "tasks" ("id"),

  "is_deleted" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW (),
  "deleted_at" BIGINT NOT NULL DEFAULT 0,
  "created_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL,
  "deleted_by" UUID REFERENCES "users" ("id") ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS task_members__task_id__is_deleted__idx ON task_members ("task_id", "is_deleted");