
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

// Fetch featured brain garden articles (limit to 2 for homepage preview)
export const fetchFeaturedBrainGardenArticles = async () => {
  try {
    const { data, error } = await supabase
      .from('brain_garden')
      .select('*')
      .eq('featured', true)
      .order('published_date', { ascending: false })
      .limit(2);

    if (error) {
      console.error('Error fetching featured brain garden articles:', error);
      throw error;
    }

    return data || [];
  } catch (err) {
    console.error('Unexpected error in fetchFeaturedBrainGardenArticles:', err);
    return [];
  }
};

// Fetch all brain garden articles for the archive page
export const fetchAllBrainGardenArticles = async () => {
  try {
    const { data, error } = await supabase
      .from('brain_garden')
      .select('*')
      .order('published_date', { ascending: false });

    if (error) {
      console.error('Error fetching all brain garden articles:', error);
      throw error;
    }

    return data || [];
  } catch (err) {
    console.error('Unexpected error in fetchAllBrainGardenArticles:', err);
    return [];
  }
};

// Fetch single brain garden article by slug
export const fetchBrainGardenBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from('brain_garden')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Error fetching brain garden article with slug "${slug}":`, error);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Unexpected error in fetchBrainGardenBySlug:', err);
    return null;
  }
};
