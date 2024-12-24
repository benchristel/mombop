import * as channel1 from "./channel1"
import * as channel2 from "./channel2"
import * as channelDebug from "./channelDebug";
import type { Episode } from "../video";
import { allEpisodes } from "./parser";
import { ChannelModule } from "./types"

declare global {
  interface Window {
    ENVIRONMENT: string
  }
}

const debug = window.ENVIRONMENT === "development"

const channelData: Array<[string, BroadcastAlgorithm, ChannelModule] | null> = [
  ["Channel 1", "shuffle", channel1],
  ["Channel 2", "shuffle", channel2],
  debug ? ["🐞", "shuffle", channelDebug] : null,
  debug ? ["✂️", "test-segment-boundaries", channel1] : null,
]

export const channels: Array<[string, BroadcastAlgorithm, Episode[]]>
  = channelData
    .filter(nonNull)
    .map(([name, algorithm, module]) => [name, algorithm, allEpisodes(module)])

function nonNull<T>(x: T | null): x is T {
  return x != null
}

export type BroadcastAlgorithm =
  | "shuffle"
  | "test-segment-boundaries"