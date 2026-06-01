-- 1. Enable Row Level Security (RLS) on all tables
-- 2. Create tables with user isolation

-- Profiles table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  farm_name text,
  location text,
  phone text,
  farm_size_ha float,
  currency text default 'ZMW',
  role text default 'farmer',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table profiles enable row level security;
create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = id);
create policy "Admins can view all profiles" on profiles for select using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);
create policy "Admins can update all profiles" on profiles for update using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- Crops table
create table crops (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  name text not null,
  field text,
  planted date,
  harvest date,
  stage text,
  seeds float,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table crops enable row level security;
create policy "Users can CRUD own crops" on crops for all using (auth.uid() = user_id);

-- Fields table
create table fields (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  name text not null,
  size float,
  soil text,
  location text,
  notes text,
  lat float,
  lng float,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table fields enable row level security;
create policy "Users can CRUD own fields" on fields for all using (auth.uid() = user_id);

-- Workers table
create table workers (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  name text not null,
  role text,
  rate float,
  phone text,
  start_date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table workers enable row level security;
create policy "Users can CRUD own workers" on workers for all using (auth.uid() = user_id);

-- Tasks table
create table tasks (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  name text not null,
  field text,
  worker text,
  due date,
  priority text,
  status text,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table tasks enable row level security;
create policy "Users can CRUD own tasks" on tasks for all using (auth.uid() = user_id);

-- Harvests table
create table harvests (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  crop text,
  date date,
  yield float,
  price float,
  field text,
  buyer text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table harvests enable row level security;
create policy "Users can CRUD own harvests" on harvests for all using (auth.uid() = user_id);

-- Inputs table
create table inputs (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  name text not null,
  type text,
  crop text,
  qty float,
  unit text,
  cost float,
  date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table inputs enable row level security;
create policy "Users can CRUD own inputs" on inputs for all using (auth.uid() = user_id);

-- Attendance table
create table attendance (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  worker text,
  date date,
  hours float,
  task text,
  status text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table attendance enable row level security;
create policy "Users can CRUD own attendance" on attendance for all using (auth.uid() = user_id);

-- SMS Log table
create table sms_log (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  recipient text,
  message text,
  sent_at timestamp with time zone default timezone('utc'::text, now()) not null,
  status text,
  sender_id text
);
alter table sms_log enable row level security;
create policy "Users can view own sms_log" on sms_log for select using (auth.uid() = user_id);
create policy "Users can insert own sms_log" on sms_log for insert with check (auth.uid() = user_id);

-- Inventory table
create table inventory (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  item text not null,
  category text,
  qty float,
  unit text,
  min_stock float,
  cost_per_unit float,
  last_updated timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table inventory enable row level security;
create policy "Users can CRUD own inventory" on inventory for all using (auth.uid() = user_id);

-- Advances table
create table advances (
  id bigint primary key generated always as identity,
  user_id uuid references auth.users on delete cascade default auth.uid(),
  worker text not null,
  amount float,
  date date,
  reason text,
  status text default 'Pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table advances enable row level security;
create policy "Users can CRUD own advances" on advances for all using (auth.uid() = user_id);
