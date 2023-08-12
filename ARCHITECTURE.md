# Architecture

## Performance

Two of the primary goals of a feature flag platform is low-latency and
high-availability. Togglr achieves this through a layered caching approach and
good foundational tools.

Togglr is built using Go, which provides an extremely good concurrency model
with goroutines that allows us to perform efficient processing of incoming
requests.

Togglr uses MongoDB for data storage which is highly scalable and efficient for
data reads. On top of MonoDB, Redis is used for caching flag states and
variations to cache flag variations for fast reads.
