<?php
/**
 * Gutenberg Blocks setup
 *
 * @package CamaloteWP\DirectMediaPlacement\Admin
 */

namespace CamaloteWP\DirectMediaPlacement\Admin;

use CamaloteWP\DirectMediaPlacement\Vendor\TenupFramework\Assets\GetAssetInfo;
use CamaloteWP\DirectMediaPlacement\Vendor\TenupFramework\Module;
use CamaloteWP\DirectMediaPlacement\Vendor\TenupFramework\ModuleInterface;

/**
 * AdminPage module.
 *
 * @package CamaloteWP\DirectMediaPlacement\Admin
 */
class AdminPage implements ModuleInterface {

	use Module;
	use GetAssetInfo;

	/**
	 * Arguments for configuring the admin page.
	 *
	 * @var array
	 */
	protected $args = [];

	public function __construct() {
		$args       = [
			'page_title' => __( 'Camalote WP - Direct Media Placement', CAMALOTE_WP_DIRECT_MEDIA_PLACEMENT_SLUG ),
			'menu_title' => __( 'Direct Media Placement', CAMALOTE_WP_DIRECT_MEDIA_PLACEMENT_SLUG ),
			'capability' => 'manage_options',
			'menu_slug'  => 'camalote-wp-direct-media-placement-placement',
			'icon'       => 'dashicons-admin-generic',
			'position'   => 2,
		];
		$this->args = array_merge( $args, $this->args );
	}

	/**
	 * Allow registration
	 */
	public function can_register() {
		return true;
	}

	/**
	 * Register hooks
	 */
	public function register() {
		$this->setup_asset_vars(
			dist_path: CAMALOTE_WP_DIRECT_MEDIA_PLACEMENT_DIST_PATH,
			fallback_version: CAMALOTE_WP_DIRECT_MEDIA_PLACEMENT_VERSION
		);

		add_action( 'admin_menu', [ $this, 'register_admin_menu' ], 10 );
	}

	/**
	 * Registers a top-level admin menu page
	 */
	public function register_admin_menu(): void {
		$args = $this->args;

		add_menu_page(
			$args['page_title'],
			$args['menu_title'],
			$args['capability'],
			$args['menu_slug'],
			[ $this, 'render_admin_page' ],
			$args['icon'],
			$args['position']
		);
	}

	/**
	 * Renders the admin page
	 */
	public function render_admin_page() {
		printf(
			'<div id="%s"></div>',
			esc_attr( $this->args['menu_slug'] )
		);
	}
}
