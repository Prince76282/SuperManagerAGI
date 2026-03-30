/**
 * Dataset Helper Utilities
 *
 * Common functions for querying and manipulating dataset arrays.
 * These helpers reduce boilerplate in components and pages.
 *
 * Import pattern:
 * import { getById, filterByTag, sortByDate } from '@/lib/Dataset/utils/helpers';
 */

type DataRecord = Record<string, unknown>;

/**
 * Get single item from array by ID
 * @param array - Array of items with 'id' property
 * @param id - ID to search for
 * @param throwOnMissing - If true, throws error when not found (default: false)
 * @returns Item or undefined
 *
 * @example
 * const feature = getById(features, "ada-integration-layer");
 */
export function getById<T extends { id: string }>(
  array: T[],
  id: string,
  throwOnMissing = false,
): T | undefined {
  const item = array.find((item) => item.id === id);
  if (!item && throwOnMissing) {
    throw new Error(`Item with id "${id}" not found`);
  }
  return item;
}

/**
 * Filter items by tag (supports both 'tag' and 'tags' properties)
 * @param array - Array of items
 * @param searchTag - Tag to filter by
 * @param property - Which property contains tags (default: 'tag')
 * @returns Filtered array
 *
 * @example
 * const automationPosts = filterByTag(blogPosts, "Automation");
 * const guidesOnly = filterByTag(contentData, "Guide", "tag");
 */
export function filterByTag<T extends DataRecord>(
  array: T[],
  searchTag: string,
  property: keyof T & string = "tag",
): T[] {
  return array.filter((item) => {
    const tags = item[property];
    if (!tags) return false;
    if (Array.isArray(tags)) {
      return tags.includes(searchTag);
    }
    return tags === searchTag;
  });
}

/**
 * Sort items by date (descending - newest first)
 * @param array - Array of items with date property
 * @param property - Which property contains the date (default: 'date')
 * @param ascending - Sort ascending instead (default: false)
 * @returns Sorted array
 *
 * @example
 * const sorted = sortByDate(blogPosts); // Newest first
 * const ascending = sortByDate(posts, "date", true); // Oldest first
 */
export function sortByDate<T extends DataRecord>(
  array: T[],
  property: keyof T & string = "date",
  ascending = false,
): T[] {
  return [...array].sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];
    const dateA = new Date(
      typeof valueA === "string" ||
        typeof valueA === "number" ||
        valueA instanceof Date
        ? valueA
        : 0,
    ).getTime();
    const dateB = new Date(
      typeof valueB === "string" ||
        typeof valueB === "number" ||
        valueB instanceof Date
        ? valueB
        : 0,
    ).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

/**
 * Get first N items from array
 * @param array - Any array
 * @param limit - Number of items to return (default: 3)
 * @returns Limited array
 *
 * @example
 * const featured = take(blogPosts, 5);
 */
export function take<T>(array: T[], limit: number = 3): T[] {
  return array.slice(0, limit);
}

/**
 * Get items marked as featured/highlighted
 * @param array - Array of items
 * @param property - Property to check (default: 'featured')
 * @returns Items where property is true
 *
 * @example
 * const featured = getFeatured(reports);
 * const highlights = getFeatured(cards, "highlighted");
 */
export function getFeatured<T extends DataRecord>(
  array: T[],
  property: keyof T & string = "featured",
): T[] {
  return array.filter((item) => item[property] === true);
}

/**
 * Get single featured item (first one marked as featured)
 * @param array - Array of items
 * @param property - Property to check (default: 'featured')
 * @returns First featured item or undefined
 *
 * @example
 * const hero = getFeaturedItem(reports);
 */
export function getFeaturedItem<T extends DataRecord>(
  array: T[],
  property: keyof T & string = "featured",
): T | undefined {
  return getFeatured(array, property)[0];
}

/**
 * Group items by category/property
 * @param array - Array of items
 * @param property - Property to group by
 * @returns Object with groups as keys
 *
 * @example
 * const byCategory = groupBy(posts, "category");
 */
export function groupBy<T extends DataRecord>(
  array: T[],
  property: keyof T & string,
): Record<string, T[]> {
  return array.reduce(
    (acc, item) => {
      const value = item[property];
      const key =
        typeof value === "string" && value.length > 0
          ? value
          : "uncategorized";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}

/**
 * Validate that required fields exist in data object
 * @param data - Data object to validate
 * @param requiredFields - Array of field names that must exist
 * @returns Boolean - true if valid
 *
 * @example
 * if (!isValidContent(post, ["title", "sections", "id"])) {
 *   console.error("Invalid blog post structure");
 * }
 */
export function isValidContent(
  data: DataRecord,
  requiredFields: string[],
): boolean {
  return requiredFields.every(
    (field) =>
      field in data && data[field] !== null && data[field] !== undefined,
  );
}

/**
 * Get all unique values from array for a property
 * @param array - Array of items
 * @param property - Property to extract
 * @returns Array of unique values
 *
 * @example
 * const allTags = getUniqueValues(posts, "tag");
 * const allCategories = getUniqueValues(reports, "category");
 */
export function getUniqueValues<T extends DataRecord>(
  array: T[],
  property: keyof T & string,
): unknown[] {
  const values = array.map((item) => item[property]).filter(Boolean);
  return [...new Set(values)];
}

/**
 * Search items by string query (basic substring matching)
 * @param array - Array of items
 * @param query - Search query
 * @param fields - Fields to search in (default: ["title", "description"])
 * @returns Matching items
 *
 * @example
 * const results = search(posts, "automation", ["title", "description", "content"]);
 */
export function search<T extends DataRecord>(
  array: T[],
  query: string,
  fields: Array<keyof T & string> = [
    "title",
    "description",
  ] as Array<keyof T & string>,
): T[] {
  const q = query.toLowerCase();
  return array.filter((item) =>
    fields.some((field) => {
      const value = item[field];
      if (typeof value === "string") {
        return value.toLowerCase().includes(q);
      }
      return false;
    }),
  );
}
