export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      spatial_ref_sys: {
        Row: {
          srid: number;
          auth_name: string | null;
          auth_srid: number | null;
          srtext: string | null;
          proj4text: string | null;
        };
        Insert: {
          srid: number;
          auth_name?: string | null;
          auth_srid?: number | null;
          srtext?: string | null;
          proj4text?: string | null;
        };
        Update: {
          srid?: number;
          auth_name?: string | null;
          auth_srid?: number | null;
          srtext?: string | null;
          proj4text?: string | null;
        };
      };
      districts: {
        Row: {
          id: number;
          name: string;
          geom: unknown;
        };
        Insert: {
          id?: number;
          name: string;
          geom: unknown;
        };
        Update: {
          id?: number;
          name?: string;
          geom?: unknown;
        };
      };
      trees: {
        Row: {
          id: number;
          type: string;
          geom: unknown;
          age: number | null;
          height: number | null;
        };
        Insert: {
          id?: number;
          type: string;
          geom: unknown;
          age?: number | null;
          height?: number | null;
        };
        Update: {
          id?: number;
          type?: string;
          geom?: unknown;
          age?: number | null;
          height?: number | null;
        };
      };
      adoptions: {
        Row: {
          user_id: string;
          tree_id: number;
          created_at: string;
        };
        Insert: {
          user_id: string;
          tree_id: number;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          tree_id?: number;
          created_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          username: string | null;
        };
        Insert: {
          id: string;
          username?: string | null;
        };
        Update: {
          id?: string;
          username?: string | null;
        };
      };
      waterings: {
        Row: {
          id: number;
          amount: number;
          tree_id: number;
          user_id: string;
        };
        Insert: {
          id?: number;
          amount: number;
          tree_id: number;
          user_id: string;
        };
        Update: {
          id?: number;
          amount?: number;
          tree_id?: number;
          user_id?: string;
        };
      };
    };
    Views: {
      geography_columns: {
        Row: {
          f_table_catalog: unknown | null;
          f_table_schema: unknown | null;
          f_table_name: unknown | null;
          f_geography_column: unknown | null;
          coord_dimension: number | null;
          srid: number | null;
          type: string | null;
        };
      };
      geometry_columns: {
        Row: {
          f_table_catalog: string | null;
          f_table_schema: unknown | null;
          f_table_name: unknown | null;
          f_geometry_column: unknown | null;
          coord_dimension: number | null;
          srid: number | null;
          type: string | null;
        };
        Insert: {
          f_table_catalog?: string | null;
          f_table_schema?: unknown | null;
          f_table_name?: unknown | null;
          f_geometry_column?: unknown | null;
          coord_dimension?: number | null;
          srid?: number | null;
          type?: string | null;
        };
        Update: {
          f_table_catalog?: string | null;
          f_table_schema?: unknown | null;
          f_table_name?: unknown | null;
          f_geometry_column?: unknown | null;
          coord_dimension?: number | null;
          srid?: number | null;
          type?: string | null;
        };
      };
    };
    Functions: {
      _postgis_deprecate: {
        Args: { oldname: string; newname: string; version: string };
        Returns: undefined;
      };
      spheroid_in: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      spheroid_out: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_in: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_out: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_typmod_in: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      geometry_typmod_out: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_analyze: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_recv: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_send: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      point: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      path: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      polygon: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_x: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_y: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_z: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_m: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      box3d_in: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box3d_out: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box2d_in: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box2d_out: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box2df_in: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box2df_out: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      gidx_in: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      gidx_out: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_lt: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_le: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_gt: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_ge: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_eq: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_cmp: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      geometry_sortsupport: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_hash: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      geometry_gist_distance_2d: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      geometry_gist_consistent_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_gist_compress_2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_penalty_2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_picksplit_2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_union_2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_same_2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_decompress_2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      _postgis_selectivity: {
        Args: { tbl: unknown; att_name: string; geom: unknown; mode: unknown };
        Returns: number;
      };
      _postgis_join_selectivity: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      _postgis_stats: {
        Args: { tbl: unknown; att_name: string; text: unknown };
        Returns: string;
      };
      _postgis_index_extent: {
        Args: { tbl: unknown; col: string };
        Returns: unknown;
      };
      gserialized_gist_sel_2d: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      gserialized_gist_sel_nd: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      gserialized_gist_joinsel_2d: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      gserialized_gist_joinsel_nd: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      geometry_overlaps: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_same: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_distance_centroid: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      geometry_distance_box: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      geometry_contains: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_within: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_left: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_overleft: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_below: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_overbelow: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_overright: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_right: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_overabove: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_above: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_gist_consistent_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_gist_compress_nd: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_penalty_nd: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_picksplit_nd: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_union_nd: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_same_nd: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_gist_decompress_nd: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_overlaps_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_contains_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_within_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_same_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_distance_centroid_nd: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      geometry_distance_cpa: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      geometry_gist_distance_nd: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_shiftlongitude: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_wrapx: {
        Args: { geom: unknown; wrap: number; move: number };
        Returns: unknown;
      };
      st_xmin: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_ymin: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_zmin: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_xmax: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_ymax: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_zmax: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_expand: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_expand: {
        Args: { box: unknown; dx: number; dy: number };
        Returns: unknown;
      };
      postgis_getbbox: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_makebox2d: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_estimatedextent: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_estimatedextent: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_estimatedextent: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_findextent: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_findextent: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      postgis_addbbox: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      postgis_dropbbox: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      postgis_hasbbox: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_quantizecoordinates: {
        Args: {
          g: unknown;
          prec_x: number;
          prec_y: unknown;
          prec_z: unknown;
          prec_m: unknown;
        };
        Returns: unknown;
      };
      st_memsize: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_summary: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_npoints: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_nrings: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_3dlength: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_length2d: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_length: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_lengthspheroid: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_length2dspheroid: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_3dperimeter: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_perimeter2d: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_perimeter: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_area2d: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_area: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_ispolygoncw: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_ispolygonccw: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_distancespheroid: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_distance: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_pointinsidecircle: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_azimuth: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_angle: {
        Args: { pt1: unknown; pt2: unknown; pt3: unknown; pt4: unknown };
        Returns: number;
      };
      st_force2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_force3dz: {
        Args: { geom: unknown; zvalue: unknown };
        Returns: unknown;
      };
      st_force3d: {
        Args: { geom: unknown; zvalue: unknown };
        Returns: unknown;
      };
      st_force3dm: {
        Args: { geom: unknown; mvalue: unknown };
        Returns: unknown;
      };
      st_force4d: {
        Args: { geom: unknown; zvalue: unknown; mvalue: unknown };
        Returns: unknown;
      };
      st_forcecollection: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_collectionextract: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_collectionextract: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_collectionhomogenize: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multi: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_forcecurve: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_forcesfs: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_forcesfs: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_expand: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_expand: {
        Args: { box: unknown; dx: number; dy: number; dz: unknown };
        Returns: unknown;
      };
      st_expand: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_expand: {
        Args: {
          geom: unknown;
          dx: number;
          dy: number;
          dz: unknown;
          dm: unknown;
        };
        Returns: unknown;
      };
      st_envelope: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_boundingdiagonal: {
        Args: { geom: unknown; fits: unknown };
        Returns: unknown;
      };
      st_reverse: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_forcepolygoncw: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_forcepolygonccw: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_forcerhr: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      postgis_noop: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      postgis_geos_noop: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_normalize: {
        Args: { geom: unknown };
        Returns: unknown;
      };
      st_zmflag: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_ndims: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_asewkt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asewkt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_astwkb: {
        Args: {
          geom: unknown;
          prec: unknown;
          prec_z: unknown;
          prec_m: unknown;
          with_sizes: unknown;
          with_boxes: unknown;
        };
        Returns: string;
      };
      st_astwkb: {
        Args: {
          geom: unknown;
          ids: unknown;
          prec: unknown;
          prec_z: unknown;
          prec_m: unknown;
          with_sizes: unknown;
          with_boxes: unknown;
        };
        Returns: string;
      };
      st_asewkb: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_ashexewkb: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_ashexewkb: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asewkb: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_aslatlontext: {
        Args: { geom: unknown; tmpl: unknown };
        Returns: string;
      };
      geomfromewkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromewkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromtwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geomfromewkt: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromewkt: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_makepoint: {
        Args: { double: unknown; double: unknown };
        Returns: unknown;
      };
      st_makepoint: {
        Args: { double: unknown; double: unknown; double: unknown };
        Returns: unknown;
      };
      st_makepoint: {
        Args: {
          double: unknown;
          double: unknown;
          double: unknown;
          double: unknown;
        };
        Returns: unknown;
      };
      st_makepointm: {
        Args: { double: unknown; double: unknown; double: unknown };
        Returns: unknown;
      };
      st_3dmakebox: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_makeline: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linefrommultipoint: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_makeline: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_addpoint: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_addpoint: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_removepoint: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_setpoint: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_makeenvelope: {
        Args: {
          double: unknown;
          double: unknown;
          double: unknown;
          double: unknown;
          integer: unknown;
        };
        Returns: unknown;
      };
      st_tileenvelope: {
        Args: {
          zoom: number;
          x: number;
          y: number;
          bounds: unknown;
          margin: unknown;
        };
        Returns: unknown;
      };
      st_makepolygon: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_makepolygon: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_buildarea: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_polygonize: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_clusterintersecting: {
        Args: Record<string, unknown>;
        Returns: unknown[];
      };
      st_clusterwithin: {
        Args: Record<string, unknown>;
        Returns: unknown[];
      };
      st_clusterdbscan: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_linemerge: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_affine: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_affine: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_rotate: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_rotate: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_rotate: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_rotatez: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_rotatex: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_rotatey: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_translate: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_translate: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_scale: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_scale: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_scale: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_scale: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_transscale: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_dump: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_dumprings: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_dumppoints: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      populate_geometry_columns: {
        Args: { use_typmod: unknown };
        Returns: string;
      };
      populate_geometry_columns: {
        Args: { tbl_oid: unknown; use_typmod: unknown };
        Returns: number;
      };
      addgeometrycolumn: {
        Args: {
          catalog_name: string;
          schema_name: string;
          table_name: string;
          column_name: string;
          new_srid_in: number;
          new_type: string;
          new_dim: number;
          use_typmod: unknown;
        };
        Returns: string;
      };
      addgeometrycolumn: {
        Args: {
          schema_name: string;
          table_name: string;
          column_name: string;
          new_srid: number;
          new_type: string;
          new_dim: number;
          use_typmod: unknown;
        };
        Returns: string;
      };
      addgeometrycolumn: {
        Args: {
          table_name: string;
          column_name: string;
          new_srid: number;
          new_type: string;
          new_dim: number;
          use_typmod: unknown;
        };
        Returns: string;
      };
      dropgeometrycolumn: {
        Args: {
          catalog_name: string;
          schema_name: string;
          table_name: string;
          column_name: string;
        };
        Returns: string;
      };
      dropgeometrycolumn: {
        Args: { schema_name: string; table_name: string; column_name: string };
        Returns: string;
      };
      dropgeometrycolumn: {
        Args: { table_name: string; column_name: string };
        Returns: string;
      };
      dropgeometrytable: {
        Args: { catalog_name: string; schema_name: string; table_name: string };
        Returns: string;
      };
      dropgeometrytable: {
        Args: { schema_name: string; table_name: string };
        Returns: string;
      };
      dropgeometrytable: {
        Args: { table_name: string };
        Returns: string;
      };
      updategeometrysrid: {
        Args: {
          catalogn_name: string;
          schema_name: string;
          table_name: string;
          column_name: string;
          new_srid_in: number;
        };
        Returns: string;
      };
      updategeometrysrid: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      updategeometrysrid: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      find_srid: {
        Args: { character: unknown; character: unknown; character: unknown };
        Returns: number;
      };
      get_proj4_from_srid: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_setsrid: {
        Args: { geom: unknown; srid: number };
        Returns: unknown;
      };
      st_srid: {
        Args: { geom: unknown };
        Returns: number;
      };
      postgis_transform_geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_transform: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_transform: {
        Args: { geom: unknown; to_proj: string };
        Returns: unknown;
      };
      st_transform: {
        Args: { geom: unknown; from_proj: string; to_proj: string };
        Returns: unknown;
      };
      st_transform: {
        Args: { geom: unknown; from_proj: string; to_srid: number };
        Returns: unknown;
      };
      postgis_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_liblwgeom_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_proj_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_wagyu_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_scripts_installed: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_lib_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_scripts_released: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_geos_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_lib_revision: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_svn_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_libxml_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_scripts_build_date: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_lib_build_date: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      _postgis_scripts_pgsql_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      _postgis_pgsql_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_extensions_upgrade: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      postgis_full_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      box2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box3d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box3d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      box: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      text: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      box3dtobox: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      bytea: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_simplify: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_simplify: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_simplifyvw: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_seteffectivearea: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_filterbym: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_chaikinsmoothing: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_snaptogrid: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_snaptogrid: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_snaptogrid: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_snaptogrid: {
        Args: {
          geom1: unknown;
          geom2: unknown;
          double: unknown;
          double: unknown;
          double: unknown;
          double: unknown;
        };
        Returns: unknown;
      };
      st_segmentize: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_lineinterpolatepoint: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_lineinterpolatepoints: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linesubstring: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linelocatepoint: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_addmeasure: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_closestpointofapproach: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_distancecpa: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_cpawithin: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_isvalidtrajectory: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_intersection: {
        Args: { geom1: unknown; geom2: unknown; gridsize: unknown };
        Returns: unknown;
      };
      st_buffer: {
        Args: { geom: unknown; radius: number; options: unknown };
        Returns: unknown;
      };
      st_buffer: {
        Args: { geom: unknown; radius: number; quadsegs: number };
        Returns: unknown;
      };
      st_minimumboundingradius: {
        Args: Record<string, unknown>;
        Returns: Record<string, unknown>[];
      };
      st_minimumboundingcircle: {
        Args: { inputgeom: unknown; segs_per_quarter: unknown };
        Returns: unknown;
      };
      st_orientedenvelope: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_offsetcurve: {
        Args: { line: unknown; distance: number; params: unknown };
        Returns: unknown;
      };
      st_generatepoints: {
        Args: { area: unknown; npoints: number };
        Returns: unknown;
      };
      st_generatepoints: {
        Args: { area: unknown; npoints: number; seed: number };
        Returns: unknown;
      };
      st_convexhull: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_simplifypreservetopology: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_isvalidreason: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_isvaliddetail: {
        Args: { geom: unknown; flags: unknown };
        Returns: unknown;
      };
      st_isvalidreason: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_isvalid: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_hausdorffdistance: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_hausdorffdistance: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: number;
      };
      st_frechetdistance: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: number;
      };
      st_maximuminscribedcircle: {
        Args: Record<string, unknown>;
        Returns: Record<string, unknown>[];
      };
      st_difference: {
        Args: { geom1: unknown; geom2: unknown; gridsize: unknown };
        Returns: unknown;
      };
      st_boundary: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_points: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_symdifference: {
        Args: { geom1: unknown; geom2: unknown; gridsize: unknown };
        Returns: unknown;
      };
      st_symmetricdifference: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_union: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_union: {
        Args: { geom1: unknown; geom2: unknown; gridsize: number };
        Returns: unknown;
      };
      st_unaryunion: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_removerepeatedpoints: {
        Args: { geom: unknown; tolerance: unknown };
        Returns: unknown;
      };
      st_clipbybox2d: {
        Args: { geom: unknown; box: unknown };
        Returns: unknown;
      };
      st_subdivide: {
        Args: { geom: unknown; maxvertices: unknown; gridsize: unknown };
        Returns: unknown;
      };
      st_reduceprecision: {
        Args: { geom: unknown; gridsize: number };
        Returns: unknown;
      };
      st_makevalid: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_cleangeometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_split: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_sharedpaths: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_snap: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: unknown;
      };
      st_relatematch: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_node: {
        Args: { g: unknown };
        Returns: unknown;
      };
      st_delaunaytriangles: {
        Args: { g1: unknown; tolerance: unknown; flags: unknown };
        Returns: unknown;
      };
      _st_voronoi: {
        Args: {
          g1: unknown;
          clip: unknown;
          tolerance: unknown;
          return_polygons: unknown;
        };
        Returns: unknown;
      };
      st_voronoipolygons: {
        Args: { g1: unknown; tolerance: unknown; extend_to: unknown };
        Returns: unknown;
      };
      st_voronoilines: {
        Args: { g1: unknown; tolerance: unknown; extend_to: unknown };
        Returns: unknown;
      };
      st_combinebbox: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_combinebbox: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_combinebbox: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_extent: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_3dextent: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_collect: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_memcollect: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_collect: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_memunion: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_geometry_accum_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_geometry_accum_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_geometry_accum_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_geometry_union_finalfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_geometry_collect_finalfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_geometry_polygonize_finalfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_geometry_clusterintersecting_finalfn: {
        Args: Record<string, unknown>;
        Returns: unknown[];
      };
      pgis_geometry_clusterwithin_finalfn: {
        Args: Record<string, unknown>;
        Returns: unknown[];
      };
      pgis_geometry_makeline_finalfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_union: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_union: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_union: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_collect: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_clusterintersecting: {
        Args: Record<string, unknown>;
        Returns: unknown[];
      };
      st_clusterwithin: {
        Args: Record<string, unknown>;
        Returns: unknown[];
      };
      st_polygonize: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_makeline: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_clusterkmeans: {
        Args: { geom: unknown; k: number };
        Returns: number;
      };
      st_relate: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: string;
      };
      st_relate: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_relate: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_disjoint: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown };
        Returns: number;
      };
      _st_dwithin: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: boolean;
      };
      _st_touches: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_intersects: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_crosses: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_contains: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_covers: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_coveredby: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_within: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_overlaps: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_dfullywithin: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: boolean;
      };
      _st_3ddwithin: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: boolean;
      };
      _st_3ddfullywithin: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: boolean;
      };
      _st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_equals: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      postgis_index_supportfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown };
        Returns: number;
      };
      st_dwithin: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: boolean;
      };
      st_touches: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_intersects: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_crosses: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_contains: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_within: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_covers: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_coveredby: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_overlaps: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_dfullywithin: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: boolean;
      };
      st_3ddwithin: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: boolean;
      };
      st_3ddfullywithin: {
        Args: { geom1: unknown; geom2: unknown; double: unknown };
        Returns: boolean;
      };
      st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_equals: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      st_isvalid: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_minimumclearance: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_minimumclearanceline: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_centroid: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geometricmedian: {
        Args: {
          g: unknown;
          tolerance: unknown;
          max_iter: unknown;
          fail_if_not_converged: unknown;
        };
        Returns: unknown;
      };
      st_isring: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_pointonsurface: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_issimple: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_iscollection: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      equals: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      _st_geomfromgml: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromgml: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromgml: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_gmltosql: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_gmltosql: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromkml: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromgeojson: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromgeojson: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromgeojson: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      postgis_libjson_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      st_linefromencodedpolyline: {
        Args: { txtin: string; nprecision: unknown };
        Returns: unknown;
      };
      st_asencodedpolyline: {
        Args: { geom: unknown; nprecision: unknown };
        Returns: string;
      };
      st_assvg: {
        Args: { geom: unknown; rel: unknown; maxdecimaldigits: unknown };
        Returns: string;
      };
      _st_asgml: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asgml: {
        Args: { geom: unknown; maxdecimaldigits: unknown; options: unknown };
        Returns: string;
      };
      st_asgml: {
        Args: {
          version: number;
          geom: unknown;
          maxdecimaldigits: unknown;
          options: unknown;
          nprefix: unknown;
          id: unknown;
        };
        Returns: string;
      };
      st_askml: {
        Args: { geom: unknown; maxdecimaldigits: unknown; nprefix: unknown };
        Returns: string;
      };
      st_asgeojson: {
        Args: { geom: unknown; maxdecimaldigits: unknown; options: unknown };
        Returns: string;
      };
      st_asgeojson: {
        Args: {
          r: Record<string, unknown>[];
          geom_column: unknown;
          maxdecimaldigits: unknown;
          pretty_bool: unknown;
        };
        Returns: string;
      };
      json: {
        Args: Record<string, unknown>;
        Returns: Json;
      };
      jsonb: {
        Args: Record<string, unknown>;
        Returns: Json;
      };
      pgis_asmvt_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_asmvt_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_asmvt_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_asmvt_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_asmvt_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_asmvt_finalfn: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      pgis_asmvt_combinefn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_asmvt_serialfn: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      pgis_asmvt_deserialfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_asmvt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asmvt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asmvt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asmvt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asmvt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asmvtgeom: {
        Args: {
          geom: unknown;
          bounds: unknown;
          extent: unknown;
          buffer: unknown;
          clip_geom: unknown;
        };
        Returns: unknown;
      };
      postgis_libprotobuf_version: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      pgis_asgeobuf_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_asgeobuf_transfn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      pgis_asgeobuf_finalfn: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asgeobuf: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asgeobuf: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_geohash: {
        Args: { geom: unknown; maxchars: unknown };
        Returns: string;
      };
      _st_sortablehash: {
        Args: { geom: unknown };
        Returns: number;
      };
      st_box2dfromgeohash: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_pointfromgeohash: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromgeohash: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_numpoints: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_numgeometries: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_geometryn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_dimension: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_exteriorring: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_numinteriorrings: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_numinteriorring: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_interiorringn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometrytype: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_geometrytype: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_pointn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_numpatches: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_patchn: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_startpoint: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_endpoint: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_isclosed: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_isempty: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_asbinary: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asbinary: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_astext: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_astext: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_geometryfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geometryfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_wkttosql: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_pointfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_pointfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linefromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linefromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_polyfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_polyfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_polygonfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_polygonfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mlinefromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mlinefromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multilinestringfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multilinestringfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mpointfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mpointfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multipointfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mpolyfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mpolyfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multipolygonfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multipolygonfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomcollfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomcollfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_pointfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_pointfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linefromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linefromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linestringfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_linestringfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_polyfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_polyfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_polygonfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_polygonfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mpointfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mpointfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multipointfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multipointfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multilinefromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mlinefromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mlinefromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mpolyfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_mpolyfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multipolyfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_multipolyfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomcollfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geomcollfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      _st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_closestpoint: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_shortestline: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      _st_longestline: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_longestline: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_swapordinates: {
        Args: { geom: unknown; ords: unknown };
        Returns: unknown;
      };
      st_flipcoordinates: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_bdpolyfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_bdmpolyfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      unlockrows: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      lockrow: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      lockrow: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      lockrow: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      lockrow: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      addauth: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      checkauth: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      checkauth: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      gettransactionid: {
        Args: Record<PropertyKey, never>;
        Returns: unknown;
      };
      enablelongtransactions: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      longtransactionsenabled: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      disablelongtransactions: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      geography_typmod_in: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      geography_typmod_out: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_in: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_out: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_recv: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_send: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      geography_analyze: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      bytea: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_astext: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_astext: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_astext: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_geographyfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geogfromtext: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_geogfromwkb: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      postgis_typmod_dims: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      postgis_typmod_srid: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      postgis_typmod_type: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      geography: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_gist_consistent: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography_gist_compress: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_gist_penalty: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_gist_picksplit: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_gist_union: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_gist_same: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_gist_decompress: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_overlaps: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography_distance_knn: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      geography_gist_distance: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      overlaps_geog: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      overlaps_geog: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      overlaps_geog: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geog_brin_inclusion_add_value: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography_lt: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography_le: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography_gt: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography_ge: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography_eq: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography_cmp: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_assvg: {
        Args: { geog: unknown; rel: unknown; maxdecimaldigits: unknown };
        Returns: string;
      };
      st_assvg: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asgml: {
        Args: {
          version: number;
          geog: unknown;
          maxdecimaldigits: unknown;
          options: unknown;
          nprefix: unknown;
          id: unknown;
        };
        Returns: string;
      };
      st_asgml: {
        Args: {
          geog: unknown;
          maxdecimaldigits: unknown;
          options: unknown;
          nprefix: unknown;
          id: unknown;
        };
        Returns: string;
      };
      st_asgml: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_askml: {
        Args: { geog: unknown; maxdecimaldigits: unknown; nprefix: unknown };
        Returns: string;
      };
      st_askml: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asgeojson: {
        Args: { geog: unknown; maxdecimaldigits: unknown; options: unknown };
        Returns: string;
      };
      st_asgeojson: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_distance: {
        Args: { geog1: unknown; geog2: unknown; use_spheroid: unknown };
        Returns: number;
      };
      st_distance: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      _st_expand: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      _st_distanceuncached: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      _st_distanceuncached: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      _st_distanceuncached: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      _st_distancetree: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      _st_distancetree: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      _st_dwithinuncached: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      _st_dwithinuncached: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_area: {
        Args: { geog: unknown; use_spheroid: unknown };
        Returns: number;
      };
      st_area: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_length: {
        Args: { geog: unknown; use_spheroid: unknown };
        Returns: number;
      };
      st_length: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_project: {
        Args: { geog: unknown; distance: number; azimuth: number };
        Returns: unknown;
      };
      st_azimuth: {
        Args: { geog1: unknown; geog2: unknown };
        Returns: number;
      };
      st_perimeter: {
        Args: { geog: unknown; use_spheroid: unknown };
        Returns: number;
      };
      _st_pointoutside: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_segmentize: {
        Args: { geog: unknown; max_segment_length: number };
        Returns: unknown;
      };
      _st_bestsrid: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      _st_bestsrid: {
        Args: Record<string, unknown>;
        Returns: number;
      };
      st_buffer: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_buffer: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_buffer: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_buffer: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_buffer: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_buffer: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_intersection: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_intersection: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_asbinary: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asbinary: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asewkt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asewkt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asewkt: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      geometrytype: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_summary: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_geohash: {
        Args: { geog: unknown; maxchars: unknown };
        Returns: string;
      };
      st_srid: {
        Args: { geog: unknown };
        Returns: number;
      };
      st_setsrid: {
        Args: { geog: unknown; srid: number };
        Returns: unknown;
      };
      st_centroid: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_centroid: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      _st_covers: {
        Args: { geog1: unknown; geog2: unknown };
        Returns: boolean;
      };
      _st_dwithin: {
        Args: {
          geog1: unknown;
          geog2: unknown;
          tolerance: number;
          use_spheroid: unknown;
        };
        Returns: boolean;
      };
      _st_coveredby: {
        Args: { geog1: unknown; geog2: unknown };
        Returns: boolean;
      };
      st_covers: {
        Args: { geog1: unknown; geog2: unknown };
        Returns: boolean;
      };
      st_dwithin: {
        Args: {
          geog1: unknown;
          geog2: unknown;
          tolerance: number;
          use_spheroid: unknown;
        };
        Returns: boolean;
      };
      st_coveredby: {
        Args: { geog1: unknown; geog2: unknown };
        Returns: boolean;
      };
      st_intersects: {
        Args: { geog1: unknown; geog2: unknown };
        Returns: boolean;
      };
      st_covers: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_coveredby: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_dwithin: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_intersects: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      st_distancesphere: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      postgis_type_name: {
        Args: {
          geomname: string;
          coord_dimension: number;
          use_new_name: unknown;
        };
        Returns: string;
      };
      postgis_constraint_srid: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string };
        Returns: number;
      };
      postgis_constraint_dims: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string };
        Returns: number;
      };
      postgis_constraint_type: {
        Args: { geomschema: string; geomtable: string; geomcolumn: string };
        Returns: string;
      };
      st_3ddistance: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_3dmaxdistance: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: number;
      };
      st_3dclosestpoint: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_3dshortestline: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_3dlongestline: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: unknown;
      };
      st_coorddim: {
        Args: { geometry: unknown };
        Returns: number;
      };
      st_curvetoline: {
        Args: { geom: unknown; tol: unknown; toltype: unknown; flags: unknown };
        Returns: unknown;
      };
      st_hasarc: {
        Args: { geometry: unknown };
        Returns: boolean;
      };
      st_linetocurve: {
        Args: { geometry: unknown };
        Returns: unknown;
      };
      st_point: {
        Args: { double: unknown; double: unknown };
        Returns: unknown;
      };
      st_polygon: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      st_wkbtosql: {
        Args: { wkb: string };
        Returns: unknown;
      };
      st_locatebetween: {
        Args: {
          geometry: unknown;
          frommeasure: number;
          tomeasure: number;
          leftrightoffset: unknown;
        };
        Returns: unknown;
      };
      st_locatealong: {
        Args: { geometry: unknown; measure: number; leftrightoffset: unknown };
        Returns: unknown;
      };
      st_locatebetweenelevations: {
        Args: { geometry: unknown; fromelevation: number; toelevation: number };
        Returns: unknown;
      };
      st_interpolatepoint: {
        Args: { line: unknown; point: unknown };
        Returns: number;
      };
      st_hexagon: {
        Args: { size: number; cell_i: number; cell_j: number; origin: unknown };
        Returns: unknown;
      };
      st_square: {
        Args: { size: number; cell_i: number; cell_j: number; origin: unknown };
        Returns: unknown;
      };
      st_hexagongrid: {
        Args: {
          size: number;
          bounds: unknown;
          OUT: unknown;
          OUT: unknown;
          OUT: unknown;
        };
        Returns: Record<string, unknown>[];
      };
      st_squaregrid: {
        Args: {
          size: number;
          bounds: unknown;
          OUT: unknown;
          OUT: unknown;
          OUT: unknown;
        };
        Returns: Record<string, unknown>[];
      };
      contains_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      is_contained_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      overlaps_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      overlaps_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      contains_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      is_contained_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      contains_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      is_contained_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      overlaps_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      overlaps_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      overlaps_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      overlaps_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geom2d_brin_inclusion_add_value: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geom3d_brin_inclusion_add_value: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geom4d_brin_inclusion_add_value: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      _st_concavehull: {
        Args: { param_inputgeom: unknown };
        Returns: unknown;
      };
      st_concavehull: {
        Args: {
          param_geom: unknown;
          param_pctconvex: number;
          param_allow_holes: unknown;
        };
        Returns: unknown;
      };
      _st_asx3d: {
        Args: Record<string, unknown>;
        Returns: string;
      };
      st_asx3d: {
        Args: { geom: unknown; maxdecimaldigits: unknown; options: unknown };
        Returns: string;
      };
      st_angle: {
        Args: { line1: unknown; line2: unknown };
        Returns: number;
      };
      st_3dlineinterpolatepoint: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_spgist_config_2d: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_choose_2d: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_picksplit_2d: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_inner_consistent_2d: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_leaf_consistent_2d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_spgist_compress_2d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_overlaps_3d: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_contains_3d: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_contained_3d: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_same_3d: {
        Args: { geom1: unknown; geom2: unknown };
        Returns: boolean;
      };
      geometry_spgist_config_3d: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_choose_3d: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_picksplit_3d: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_inner_consistent_3d: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_leaf_consistent_3d: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_spgist_compress_3d: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geometry_spgist_config_nd: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_choose_nd: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_picksplit_nd: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_inner_consistent_nd: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geometry_spgist_leaf_consistent_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geometry_spgist_compress_nd: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      geography_spgist_config_nd: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geography_spgist_choose_nd: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geography_spgist_picksplit_nd: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geography_spgist_inner_consistent_nd: {
        Args: Record<string, unknown>;
        Returns: undefined;
      };
      geography_spgist_leaf_consistent_nd: {
        Args: Record<string, unknown>;
        Returns: boolean;
      };
      geography_spgist_compress_nd: {
        Args: Record<string, unknown>;
        Returns: unknown;
      };
      __geojson_from_geometry: {
        Args: { geom: unknown };
        Returns: Json;
      };
      __rpc_trees_by_district: {
        Args: { district_id: number };
        Returns: Record<string, unknown>[];
      };
      __rpc_trees_within_radius: {
        Args: { lon: number; lat: number; distance: number };
        Returns: Record<string, unknown>[];
      };
    };
  };
}

