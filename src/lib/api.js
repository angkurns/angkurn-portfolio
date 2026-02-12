
import { supabase } from '@/lib/supabaseClient';

// Fetch featured case studies
export const fetchFeaturedCaseStudies = async () => {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching featured case studies:', error);
      throw error;
    }

    return data || [];
  } catch (err) {
    console.error('Unexpected error in fetchFeaturedCaseStudies:', err);
    return [];
  }
};

// Fetch single case study by slug
export const fetchCaseStudyBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Error fetching case study with slug "${slug}":`, error);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Unexpected error in fetchCaseStudyBySlug:', err);
    return null;
  }
};

// Fetch featured notes (limit to 2 for homepage preview)
export const fetchFeaturedNotes = async () => {
  try {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('featured', true)
      .order('published_date', { ascending: false })
      .limit(2);

    if (error) {
      console.error('Error fetching featured notes:', error);
      throw error;
    }

    return data || [];
  } catch (err) {
    console.error('Unexpected error in fetchFeaturedNotes:', err);
    return [];
  }
};

// Fetch all notes for the archive page
export const fetchAllNotes = async () => {
  try {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('published_date', { ascending: false });

    if (error) {
      console.error('Error fetching all notes:', error);
      throw error;
    }

    return data || [];
  } catch (err) {
    console.error('Unexpected error in fetchAllNotes:', err);
    return [];
  }
};

// Fetch single note by slug
export const fetchNoteBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Error fetching note with slug "${slug}":`, error);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Unexpected error in fetchNoteBySlug:', err);
    return null;
  }
};
