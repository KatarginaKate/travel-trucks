"use client";

import { FormEvent, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CamperList from "../components/CamperList/CamperList";
import type { Camper } from "../components/CamperCard/CamperCard";
import Filter from "../components/Filter/Filter";
import type { FilterValues } from "../components/Filter/Filter";
import styles from "./page.module.css";

type CamperResponse = { campers: Camper[]; totalPages: number };

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://campers-api.goit.study"
).trim();
const PAGE_SIZE = 4;
export default function CatalogPage() {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    form: "",
    transmission: "",
    engine: "",
  });
  const [draftFilters, setDraftFilters] = useState(filters);

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({
      page: String(page),
      perPage: String(PAGE_SIZE),
    });
    Object.entries(filters).forEach(
      ([key, value]) => value && params.set(key, value),
    );
    fetch(`${API_URL}/campers?${params}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load campers");
        return response.json() as Promise<CamperResponse>;
      })
      .then((data) => {
        setCampers((current) =>
          page === 1
            ? data.campers
            : Array.from(
                new Map(
                  [...current, ...data.campers].map((camper) => [
                    camper.id,
                    camper,
                  ]),
                ).values(),
              ),
        );
        setTotalPages(data.totalPages);
        setError("");
      })
      .catch((requestError: Error) => {
        if (requestError.name !== "AbortError")
          setError("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [filters, page]);

  function applyFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setPage(1);
    setFilters(draftFilters);
  }
  function clearFilters() {
    const empty = { location: "", form: "", transmission: "", engine: "" };
    setLoading(true);
    setDraftFilters(empty);
    setFilters(empty);
    setPage(1);
  }
  function loadMore() {
    if (loading || page >= totalPages) return;
    setLoading(true);
    setPage((current) => current + 1);
  }

  return (
    <>
      <Header />
      <main className={styles.catalog}>
        <Filter
          values={draftFilters}
          onChange={(values: FilterValues) => setDraftFilters(values)}
          onSubmit={applyFilters}
          onClear={clearFilters}
        />
        <section className={styles.results} aria-labelledby="catalog-title">
          <div className={styles.resultsHeader}>
            <span className={styles.resultCount}>{campers.length} shown</span>
          </div>
          {error && <p className={styles.message}>{error}</p>}
          {!loading && !campers.length && !error && (
            <p className={styles.message}>No campers match these filters.</p>
          )}
          <CamperList campers={campers} />
          {!loading && page < totalPages && (
            <button
              className={styles.loadButton}
              type="button"
              onClick={loadMore}
            >
              Load more
            </button>
          )}
        </section>
      </main>
      {loading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingState} role="status">
            <span className={styles.spinner} aria-hidden="true" />
            <h2>Loading trucks...</h2>
            <p>
              Please wait while we fetch the best
              <br />
              travel trucks for you
            </p>
          </div>
        </div>
      )}
    </>
  );
}
