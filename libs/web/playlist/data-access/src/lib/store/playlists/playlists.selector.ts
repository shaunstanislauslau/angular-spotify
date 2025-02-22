import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SelectorUtil } from '@angular-spotify/web/shared/utils';
import { playlistsFeatureKey, PlaylistsState } from './playlists.reducer';

export const getPlaylistsState = createFeatureSelector<PlaylistsState>(playlistsFeatureKey);
export const getPlaylists = createSelector(getPlaylistsState, (state) => state.data);
export const getPlaylistsLoading = createSelector(getPlaylistsState, SelectorUtil.isLoading);
export const getPlaylistsDone = createSelector(getPlaylistsState, SelectorUtil.isDone);
export const getPlaylistsMap = createSelector(getPlaylistsState, (state) => state.map);
export const getPlaylist = (playlistId: string) =>
  createSelector(getPlaylistsMap, (map) => map?.get(playlistId));
