<?php

use App\Http\Controllers\ContactController;
use App\Models\CoveredAreas;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});
Route::get('/mobile-tyre-fitting', function () {
    return Inertia::render('MobileTyreFitting');
});
Route::get('/mobile-tyre-repair', function () {
    return Inertia::render('MobileTyreRepair');
});
Route::get('/commercial-tyres', function () {
    return Inertia::render('CommercialTyres');
});
Route::get('/puncture-repair', function () {
    return Inertia::render('PunctureRepair');
});
Route::get('/tyre-replacement', function () {
    return Inertia::render('TyreReplacement');
});
Route::get('/breakdown-recovery', function () {
    return Inertia::render('BreakdownRecovery');
});
Route::get('/tyres', function () {
    return Inertia::render('Tyres');
});
Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});
Route::get('/our-terms-and-conditions', function () {
    return Inertia::render('TermsAndConditions');
});
Route::get('/sitemap', function () {
    $areas = CoveredAreas::orderBy('slug', 'asc')->get()->toArray();

    return Inertia::render('Sitemap', [
        'areas' => $areas,
    ]);
});
Route::get('/locations/{area:slug}', function (CoveredAreas $area) {
    return Inertia::render('Location', [
        'location' => ucwords($area->area),
        'slug' => $area->slug,
    ]);
});

Route::get('/contact-us', [ContactController::class, 'index']);
Route::post('/contact-us', [ContactController::class, 'store']);

