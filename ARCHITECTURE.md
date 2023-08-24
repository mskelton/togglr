# Architecture

## Performance

Two of the primary goals of a feature flag platform is low-latency and
high-availability. Togglr achieves this through a layered caching approach and
good foundational tools.

Togglr is built using Go, which provides an extremely good concurrency model
with goroutines that allows us to perform efficient processing of incoming
requests.

Togglr uses Postgres with a Redis caching layer on top for storing flag states
and variations for super fast reading of flags.
