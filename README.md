# solana-nextjs

A template for Solana projects that uses Anchor and Next.js.

## Useful Commands

### Run tests 

```
anchor test
```

### Get program ID

```
$ solana address -k target/deploy/solana_nextjs-keypair.json
GYw2NyDL6ajngPSCd6tEAcUKhqX4gJbtpPpNajbrYb6x
```

Make sure to use this in `lib.rs` and `Anchor.toml`.