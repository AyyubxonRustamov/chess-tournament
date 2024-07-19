Enum "USER_TYPE" {
  "ADMIN"
  "MODERATOR"
  "USER"
}

Enum "CHAT_TYPE" {
  "PRIVATE"
  "GROUP"
}

Enum "GENDER_TYPE" {
  "MALE"
  "FEMALE"
}

Enum "MEDIA_TYPE" {
  "PHOTO"
  "VIDEO"
  "AUDIO"
  "FILE"
}

Table roles {

  id UUID [pk, default: 'uuid_generate_v4()']
  title VARCHAR(255) [not null]

  user BOOLEAN [NOT NULL, DEFAULT:FALSE]
  user_created BOOLEAN [NOT NULL, DEFAULT:FALSE]
  user_updated BOOLEAN [NOT NULL, DEFAULT:FALSE]
  user_deleted BOOLEAN [NOT NULL, DEFAULT:FALSE]

  role BOOLEAN [NOT NULL, DEFAULT:TRUE]
  role_created BOOLEAN [NOT NULL, DEFAULT:FALSE]
  role_updated BOOLEAN [NOT NULL, DEFAULT:FALSE]
  role_deleted BOOLEAN [NOT NULL, DEFAULT:FALSE]

  job BOOLEAN [NOT NULL, DEFAULT:TRUE]
  job_created BOOLEAN [NOT NULL, DEFAULT:FALSE]
  job_updated BOOLEAN [NOT NULL, DEFAULT:FALSE]
  job_deleted BOOLEAN [NOT NULL, DEFAULT:FALSE]

  skill BOOLEAN [NOT NULL, DEFAULT:TRUE]
  skill_created BOOLEAN [NOT NULL, DEFAULT:FALSE]
  skill_updated BOOLEAN [NOT NULL, DEFAULT:FALSE]
  skill_deleted BOOLEAN [NOT NULL, DEFAULT:FALSE]

  project BOOLEAN [NOT NULL, DEFAULT:TRUE]
  project_created BOOLEAN [NOT NULL, DEFAULT:FALSE]
  project_updated BOOLEAN [NOT NULL, DEFAULT:FALSE]
  project_deleted BOOLEAN [NOT NULL, DEFAULT:FALSE]

  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
}


Table "jobs" {
  "id" UUID [not null]
  "title" VARCHAR(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "users" {
  "id" UUID [not null]
  "first_name" VARCHAR(255) [not null]
  "last_name" VARCHAR(255) [not null]
  "date_of_birth" TIMESTAMP(0) [not null]
  "gender" GENDER_TYPE [not null]
  "email" VARCHAR(255) [not null]
  "password" VARCHAR(255) [not null]
  "phone" VARCHAR(255) [not null]
  "photo" VARCHAR(255)
  "bio" VARCHAR(255)
  "address" VARCHAR(255)
  "role_id" UUID [not null, ref: > roles.id]
  "type" USER_TYPE [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
  "is_confirm" BOOLEAN [not null, default: FALSE]
}

Table "user_status" {
  "id" UUID [not null]
  "info" VARCHAR(255) [not null]
  "user_id" UUID [not null, ref: > users.id]
  "job_id" UUID [not null, ref: > jobs.id]
  "start_date" TIMESTAMP(0) [not null]
  "end_date" TIMESTAMP(0) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "metadata" {
  "id" UUID [not null]
  "user_id" UUID [not null, ref: > users.id]
  "resume_id" UUID [ ref: > resume.id]
  "key" VARCHAR(255) [not null,note: 'enum type - example:  study, ... another info']
  "context" VARCHAR(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "resume" {
  "id" UUID [not null]
  "user_id" BIGINT [not null, ref: > users.id]
  "url" VARCHAR(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "chats" {
  "id" UUID [not null]
  "type" CHAT_TYPE [not null, default: 'PRIVATE']
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "messages" {
  "id" UUID [not null]
  "chat_id" UUID [not null, ref: > chats.id]
  "reply_id" UUID [ref: > messages.id]
  "owner_id" BIGINT [not null, ref: > users.id]
  "text" TEXT [not null]
  "status" VARCHAR(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "media" {
  "id" UUID [not null]
  "url" VARCHAR(255) [not null]
  "message_id" UUID [not null, ref: > messages.id]
  "type" MEDIA_TYPE [not null, note: 'enum video, picture, file, audio']
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
  "file_name" VARCHAR(255) [not null]
}

Table "skills" {
  "id" UUID [not null]
  "name" VARCHAR(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "user_skill" {
  "id" UUID [not null]
  "user_id" UUID [not null, ref: > users.id]
  "skill_id" UUID [not null, ref: > skills.id]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "projects" {
  "id" UUID [not null]
  "name" VARCHAR(255) [not null]
  "status" VARCHAR(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "user_project" {
  "id" UUID [not null]
  "user_id" UUID [not null, ref: > users.id]
  "project_id" BIGINT [not null, ref: > projects.id]
  "start_date" TIMESTAMP(0) [not null]
  "end_date" TIMESTAMP(0) [not null]
  "status" VARCHAR(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" BIGINT [not null]
  "updated_at" BIGINT [not null]
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "chat_users" {
  "id" UUID [not null]
  "chat_id" UUID [not null, ref: > chats.id]
  "user_id" UUID [not null, ref: > users.id]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

// = = = = = = = = = = = = Task Manager = = = = = = = = = = = = = = = =

Table "boards" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "project_id" uuid [not null, ref: > projects.id]
  "name" varchar(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "taskbar" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "board_id" uuid [not null, ref: > boards.id] 
  "name" varchar(255) [not null]
  "position" integer [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "tasks" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "taskbar_id" uuid [not null, ref: > taskbar.id]
  "label_id"  uuid [not null, ref: > labels.id]
  "title" varchar(255) [not null]
  "description" text
  "is_active" bool [default: false]
  "start_date" timestamp [default: 'NOW()']
  "end_date" timestamp
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "comments" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "user_id" uuid [not null, ref: > users.id]
  "task_id" uuid [not null, ref: > tasks.id]
  "text" text [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "labels" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "name" varchar(255) [not null]
  "colour" varchar(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "checklist" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "task_id" uuid [not null, ref: > tasks.id]
  "name" varchar(255) [not null]
  "is_checked" bool [default: false]
  "position" integer [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "activity" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "task_id" uuid [not null, ref: > tasks.id]
  "user_id" uuid [not null, ref: > users.id]
  "activity" varchar(255) [not null]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "attachment" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "task_id" uuid [not null, ref: > tasks.id]
  "name" text [not null]
  "url" text [not null] 
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "board_members" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "user_id" uuid [not null, ref: > users.id]
  "board_id" uuid [not null, ref: > boards.id]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

Table "task_members" {
  "id" uuid [pk, default: 'uuid_generate_v4()']
  "board_member_id" uuid [not null, ref: > board_members.id]
  "task_id" uuid [not null, ref: > tasks.id]
  "is_deleted" BOOLEAN [not null]
  "created_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "updated_at" TIMESTAMP(0) [not null, default: 'NOW()']
  "deleted_at" BIGINT [not null, default: 0]
  "created_by" UUID
  "deleted_by" UUID
}

