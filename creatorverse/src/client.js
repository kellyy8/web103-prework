// Connecting application to Supabase backend
import { createClient } from '@supabase/supabase-js';

const URL = 'https://tohzmadxoktjmbeexxkv.supabase.co';
const API_KEY = 'sb_publishable_tmkZFcq8NylRHTL4p8WC5w_w9XS7BRs';
export const supabase = createClient(URL, API_KEY);
