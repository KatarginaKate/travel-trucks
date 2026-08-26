"use client";

import { FormEvent, useState } from "react";

import Header from "../components/Header/Header";
import CamperList from "../components/CamperList/CamperList";
import EmptyState from "../components/EmptyState/EmptyState";
import Filter from "../components/Filter/Filter";
import LoadingState from "../components/common/LoadingState/LoadingState";

import { EMPTY_FILTERS } from "../lib/constants";
import { useCampers } from "../hooks/useCampers";

import type { FilterValues } from "../types/camper";

import styles from "./page.module.css";

export default function CatalogPage() {
  const [filters, setFilters] = useState<FilterValues>(EMPTY_FILTERS);
  const [draftFilters, setDraftFilters] =
    useState<FilterValues>(EMPTY_FILTERS);

  const {
    campers,
    loading,
    error,
    loadMore,
    hasNextPage,
  } = useCampers(filters);

  function applyFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilters(draftFilters);
  }

  function clearFilters() {
    setDraftFilters(EMPTY_FILTERS);
    setFilters(EMPTY_FILTERS);
  }

  return (
    <>
      <Header />

      <main className={styles.catalog}>
        <Filter
          values={draftFilters}
          onChange={setDraftFilters}
          onSubmit={applyFilters}
          onClear={clearFilters}
        />

        <section
          className={styles.results}
          aria-labelledby="catalog-title"
        >
          {!!campers.length && (
            <div className={styles.resultsHeader}>
              <span className={styles.resultCount}>
                {campers.length} shown
              </span>
            </div>
          )}

          {error && <p className={styles.message}>{error}</p>}

          {!loading && !campers.length && !error && (
            <EmptyState onClear={clearFilters} />
          )}

          <CamperList campers={campers} />

          {!loading && hasNextPage && (
            <button
              className={styles.loadButton}
              type="button"
              onClick={() => loadMore()}
            >
              Load more
            </button>
          )}
        </section>
      </main>

      {loading && <LoadingState />}
    </>
  );
}